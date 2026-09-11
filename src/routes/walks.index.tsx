import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { WalkCard } from "@/components/walk-card";
import { walkFilters, walks, type WalkTag } from "@/data/walks";
import { facebookUrl } from "@/data/site";

export const Route = createFileRoute("/walks/")({
  head: () => ({
    meta: [
      { title: "Our Walks — B123 Walks" },
      {
        name: "description",
        content:
          "Browse the group walks we've enjoyed across the Midlands. All upcoming walks are announced in our Facebook group.",
      },
      { property: "og:title", content: "Our Walks — B123 Walks" },
      {
        property: "og:description",
        content:
          "A taste of the countryside walks we enjoy — upcoming walks are announced in our Facebook group.",
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
        eyebrow="Our walks"
        title="Walks We've Enjoyed"
        intro="Here's a taste of where we've been lately — hills, canals, forests and everything in between. New walks happen all the time."
      />

      <div className="container-page py-8 md:py-12">
        <div className="rounded-3xl bg-navy p-6 text-navy-foreground md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div>
            <h2 className="text-2xl">Looking for upcoming walks?</h2>
            <p className="mt-2 max-w-xl text-navy-foreground/80">
              All our new walks are announced in the B123 Walks Facebook group — it's free to
              join, and you'll be the first to hear about every walk.
            </p>
          </div>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green px-6 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90 md:mt-0"
          >
            <Facebook className="size-5" />
            Join our Facebook Group
          </a>
        </div>

        <div className="mt-10 -mx-5 overflow-x-auto px-5 pb-2">
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
              Try “All Walks” — there's usually something to see there.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
