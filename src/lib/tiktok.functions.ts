import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/tiktok";

const FIELDS = "id,title,video_description,cover_image_url,share_url,create_time,duration";

export type TikTokVideo = {
  id: string;
  title: string;
  coverImageUrl: string;
  shareUrl: string;
  createTime: number;
  duration: number;
};

export type TikTokFeedPage = {
  videos: TikTokVideo[];
  cursor: number | null;
  hasMore: boolean;
};

const inputSchema = z.object({
  cursor: z.number().nullish(),
  count: z.number().min(1).max(20).default(5),
});

export const getTikTokFeed = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => inputSchema.parse(data ?? {}))
  .handler(async ({ data }): Promise<TikTokFeedPage> => {
    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const tiktokApiKey = process.env["TIKTOK_API_KEY"];

    if (!lovableApiKey) throw new Error("LOVABLE_API_KEY is not configured");
    if (!tiktokApiKey) throw new Error("TIKTOK_API_KEY is not configured");

    const body: Record<string, unknown> = { max_count: data.count };
    if (data.cursor) body["cursor"] = data.cursor;

    const response = await fetch(`${GATEWAY_URL}/video/list/?fields=${encodeURIComponent(FIELDS)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": tiktokApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`TikTok gateway request failed [${response.status}]: ${errorBody}`);
      throw new Error(`TikTok request failed [${response.status}]: ${errorBody}`);
    }

    const payload = (await response.json()) as {
      data?: {
        videos?: Array<Record<string, unknown>>;
        cursor?: number;
        has_more?: boolean;
      };
      error?: { code?: string; message?: string };
    };

    if (payload.error && payload.error.code && payload.error.code !== "ok") {
      console.error(`TikTok API error: ${JSON.stringify(payload.error)}`);
      throw new Error(`TikTok API error: ${payload.error.message ?? payload.error.code}`);
    }

    const videos = (payload.data?.videos ?? []).map((video) => ({
      id: String(video["id"] ?? ""),
      title: String(video["title"] ?? video["video_description"] ?? "B123 Walks"),
      coverImageUrl: String(video["cover_image_url"] ?? ""),
      shareUrl: String(video["share_url"] ?? ""),
      createTime: Number(video["create_time"] ?? 0),
      duration: Number(video["duration"] ?? 0),
    }));

    return {
      videos,
      cursor: payload.data?.cursor ?? null,
      hasMore: Boolean(payload.data?.has_more),
    };
  });
