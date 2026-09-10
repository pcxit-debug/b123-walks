import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { WalkCard } from "@/components/walk-card";
import { walkFilters, walks, type WalkTag } from "@/data/walks";

export const Route = createFileRoute("/walks/")({
  head: () => ({
    meta: [
      { title: "Upcoming Walks — B123 Walks" },
      {
        name: "description",
        content:
          "See our upcoming group walks across the Midlands, with distance, difficulty, meeting points and walk leaders. Shorter, longer, weekend and evening walks.",
      },
      { property: "og:title", content: "Upcoming Walks — B123 Walks" },
      {
        property: "og:description",
        content: "Find your next social walk across the Midlands countryside.",
      },
    ],
  }),
  component: WalksPage,
});

function WalksPage() {
  const [filter, setFilter] = useState<"all" | WalkTag>("all");
  const visible = filter === "all" ? walks : walks.filter((w) => w.tags.includes(filter));

  return (
    <>
      <PageHero
        eyebrow="Find a walk"
        title="Upcoming Walks"
        intro="Pick something that suits you. Every walk shows the distance, the pace and where we meet — and there's always a friendly face waiting at the start."
      />

      <div className="container-page py-8 md:py-12">
        <div className="-mx-5 overflow-x-auto px-5 pb-2">
          <div className="flex gap-2.5">
            {walkFilters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={active}
                  className={`shrink-0 rounded-full border px-5 py-3 text-sm font-bold transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground/80 hover:bg-secondary"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {visible.length} {visible.length === 1 ? "walk" : "walks"}
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((walk) => (
            <WalkCard key={walk.slug} walk={walk} />
          ))}
        </div>

        {visible.length === 0 && (
          <div className="mt-6 rounded-3xl border border-border bg-card p-8 text-center">
            <h2 className="text-xl">Nothing in this category just yet</h2>
            <p className="mt-2 text-muted-foreground">
              Try “All Walks” — there's usually something coming up soon.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
