import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Play, Loader2 } from "lucide-react";
import { getTikTokFeed, type TikTokVideo } from "@/lib/tiktok.functions";
import { tiktokUrl } from "@/data/site";

function formatDate(seconds: number) {
  if (!seconds) return "";
  return new Date(seconds * 1000).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function VideoCard({ video }: { video: TikTokVideo }) {
  return (
    <a
      href={video.shareUrl || tiktokUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-card"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        {video.coverImageUrl ? (
          <img
            src={video.coverImageUrl}
            alt={video.title}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid size-14 place-items-center rounded-full bg-background/85 text-foreground">
            <Play className="size-6 translate-x-[1px]" />
          </span>
        </span>
      </div>
      <div className="p-4">
        <p className="line-clamp-2 font-semibold leading-snug">{video.title}</p>
        <p className="mt-1.5 text-sm text-muted-foreground">{formatDate(video.createTime)}</p>
      </div>
    </a>
  );
}

export function TikTokFeed({ pageSize = 5 }: { pageSize?: number }) {
  const fetchFeed = useServerFn(getTikTokFeed);
  const [pages, setPages] = useState(1);

  const { data, isPending, isError, isFetching } = useQuery({
    queryKey: ["tiktok-feed", pages, pageSize],
    queryFn: () => fetchFeed({ data: { count: pageSize * pages } }),
    staleTime: 5 * 60 * 1000,
  });

  if (isPending) {
    return (
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: pageSize }).map((_, index) => (
          <div
            key={index}
            className="aspect-[3/4] animate-pulse rounded-3xl border border-border bg-secondary"
          />
        ))}
      </div>
    );
  }

  if (isError || !data || data.videos.length === 0) {
    return (
      <div className="mt-8 rounded-3xl border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          Our latest walk videos are on TikTok — come and have a look.
        </p>
        <a
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Watch on TikTok
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {data.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        {data.hasMore ? (
          <button
            type="button"
            onClick={() => setPages((current) => current + 1)}
            disabled={isFetching}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
          >
            {isFetching ? <Loader2 className="size-5 animate-spin" /> : null}
            Show more walks
          </button>
        ) : null}
        <a
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-bold text-foreground transition-colors hover:bg-secondary sm:w-auto"
        >
          Watch on TikTok
        </a>
      </div>
    </>
  );
}
