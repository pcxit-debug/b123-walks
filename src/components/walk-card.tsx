import { Link } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Route, Signal, User } from "lucide-react";
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
          <span className="min-w-0">
            {walk.date} · {walk.startTime}
          </span>
        </div>
        <div className="flex min-w-0 items-start gap-2.5">
          <Clock className="mt-0.5 size-4 shrink-0 text-green" />
          <span className="min-w-0">{walk.duration}</span>
        </div>
        <div className="flex min-w-0 items-start gap-2.5">
          <Route className="mt-0.5 size-4 shrink-0 text-green" />
          <span className="min-w-0">Meet: {walk.meetingPoint}</span>
        </div>
        <div className="flex min-w-0 items-start gap-2.5">
          <User className="mt-0.5 size-4 shrink-0 text-green" />
          <span className="min-w-0">Walk leader: {walk.leader}</span>
        </div>
      </dl>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{walk.description}</p>

      <Link
        to="/walks/$slug"
        params={{ slug: walk.slug }}
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Signal className="size-4" />
        View Walk Details
      </Link>
    </article>
  );
}
