import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, MapPin, Route as RouteIcon, User } from "lucide-react";
import { walks } from "@/data/walks";

export const Route = createFileRoute("/walks/$slug")({
  loader: ({ params }) => {
    const walk = walks.find((w) => w.slug === params.slug);
    if (!walk) throw notFound();
    return { walk };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Walk not found — B123 Walks" }, { name: "robots", content: "noindex" }],
      };
    }
    const { walk } = loaderData;
    const description = `${walk.distance} ${walk.difficulty.toLowerCase()} group walk at ${walk.location} on ${walk.date}, led by ${walk.leader}.`;
    return {
      meta: [
        { title: `${walk.title} — B123 Walks` },
        { name: "description", content: description },
        { property: "og:title", content: `${walk.title} — B123 Walks` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: WalkDetail,
});

function WalkDetail() {
  const { walk } = Route.useLoaderData();

  const details = [
    { icon: MapPin, label: "Location", value: walk.location },
    { icon: CalendarDays, label: "Date", value: walk.date },
    { icon: Clock, label: "Start time", value: walk.startTime },
    { icon: RouteIcon, label: "Distance", value: walk.distance },
    { icon: Clock, label: "Approximate duration", value: walk.duration },
    { icon: RouteIcon, label: "Difficulty", value: walk.difficulty },
    { icon: User, label: "Walk leader", value: walk.leader },
    { icon: MapPin, label: "Meeting point", value: walk.meetingPoint },
  ];

  return (
    <div className="container-page py-10 md:py-14">
      <Link
        to="/walks"
        className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-bold text-secondary-foreground"
      >
        <ArrowLeft className="size-4" /> All walks
      </Link>

      <h1 className="mt-6 max-w-3xl text-3xl sm:text-4xl">{walk.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/75">
        {walk.description}
      </p>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        {details.map((d) => (
          <div
            key={d.label}
            className="flex min-w-0 items-start gap-3 rounded-3xl border border-border bg-card p-5 shadow-card"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
              <d.icon className="size-5" />
            </span>
            <div className="min-w-0">
              <dt className="text-xs font-bold tracking-wide uppercase text-muted-foreground">
                {d.label}
              </dt>
              <dd className="mt-1 font-semibold">{d.value}</dd>
            </div>
          </div>
        ))}
      </dl>

      <div className="mt-10 rounded-3xl bg-navy p-7 text-navy-foreground md:p-10">
        <h2 className="text-2xl">Coming along?</h2>
        <p className="mt-2 max-w-xl text-navy-foreground/80">
          Just turn up at the meeting point a few minutes early and say hello. New walkers get two
          introductory walks free of charge.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/join"
            className="inline-flex items-center justify-center rounded-full bg-green px-6 py-4 text-base font-bold text-primary-foreground"
          >
            Join B123 Walks
          </Link>
          <Link
            to="/safety"
            className="inline-flex items-center justify-center rounded-full border border-navy-foreground/30 px-6 py-4 text-base font-bold text-navy-foreground"
          >
            What to bring
          </Link>
        </div>
      </div>
    </div>
  );
}
