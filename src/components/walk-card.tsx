import { CalendarDays, MapPin, Route } from "lucide-react";
import type { Walk } from "@/data/walks";

export function WalkCard({ walk }: { walk: Walk }) {
  return (
    <article className="flex flex-col rounded-3xl border border-border bg-card p-5 shadow-card sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
          {walk.difficulty}
        </span>
        <span className="rounded-full bg-accent/60 px-3 py-1 text-xs font-bold text-accent-foreground">
          {walk.distance}
        </span>
      </div>

      <h3 className="mt-3 text-xl leading-snug">{walk.title}</h3>

      <dl className="mt-4 grid gap-2.5 text-sm text-foreground/80">
        <div className="flex min-w-0 items-start gap-2.5">
          <MapPin className="mt-0.5 size-4 shrink-0 text-green" />
          <span className="min-w-0">{walk.location}</span>
        </div>
        <div className="flex min-w-0 items-start gap-2.5">
          <CalendarDays className="mt-0.5 size-4 shrink-0 text-green" />
          <span className="min-w-0">{walk.date}</span>
        </div>
        <div className="flex min-w-0 items-start gap-2.5">
          <Route className="mt-0.5 size-4 shrink-0 text-green" />
          <span className="min-w-0">{walk.distance}</span>
        </div>
      </dl>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{walk.description}</p>
    </article>
  );
}
