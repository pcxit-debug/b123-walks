import { createFileRoute, Link } from "@tanstack/react-router";
import { Footprints, HeartHandshake, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-walkers.jpg";
import { walks } from "@/data/walks";
import { WalkCard } from "@/components/walk-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B123 Walks — Friendly Walking Group in the Midlands" },
      {
        name: "description",
        content:
          "Join B123 Walks, a welcoming community walking group with regular social walks across Worcestershire, Birmingham, Warwickshire and the wider Midlands.",
      },
      { property: "og:title", content: "B123 Walks — Friendly Walking Group in the Midlands" },
      {
        property: "og:description",
        content: "Walking the Midlands. Making Friends. Creating Memories. No one left behind.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Footprints,
    title: "Great Walks",
    text: "Regular organised walks throughout the Midlands.",
  },
  {
    icon: Users,
    title: "Great People",
    text: "A welcoming community where new walkers are encouraged to join us.",
  },
  {
    icon: HeartHandshake,
    title: "No One Left Behind",
    text: "Our walks are social walks, not races. We walk together as a group.",
  },
];

function Index() {
  const nextWalks = walks.slice(0, 3);

  return (
    <>
      <section className="relative isolate">
        <img
          src={heroImage}
          alt="A friendly group of walkers on a grassy path through the Midlands countryside at golden hour"
          width={1920}
          height={1200}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-page relative flex min-h-[78svh] flex-col justify-end py-14 text-navy-foreground md:min-h-[80svh] md:py-20">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-navy-foreground/80">
            Walk. Talk. Connect.
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Welcome to B123 Walks
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-navy-foreground/90 md:text-2xl">
            Walking the Midlands. Making Friends. Creating Memories.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/80 md:text-lg">
            Join our friendly walking community and discover fantastic walks across the Midlands.
            Come along, enjoy the countryside, meet new people and walk at a comfortable social
            pace.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/walks"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Upcoming Walks
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-4 text-base font-bold text-foreground transition-opacity hover:opacity-90"
            >
              Join B123 Walks
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-wide uppercase text-green">Walking Together</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Much more than simply covering miles</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            B123 Walks is about getting outdoors, meeting people and improving wellbeing. It's
            about discovering new places on your own doorstep, seeing the seasons change across the
            Midlands countryside — and enjoying a few laughs along the way.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/75">
            Come alone or bring a friend. Whether you walk every weekend or you're joining a
            walking group for the very first time, you'll be welcome.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container-page">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-bold tracking-wide uppercase text-green">Next up</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Upcoming Walks</h2>
            </div>
            <Link
              to="/walks"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              See all <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {nextWalks.map((walk) => (
              <WalkCard key={walk.slug} walk={walk} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="rounded-4xl bg-navy px-6 py-14 text-center text-navy-foreground md:px-16">
          <p className="font-display text-2xl tracking-[0.15em] uppercase text-accent">
            No one left behind
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl">
            Come along and see what we're all about
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/80">
            New walkers get two introductory walks free of charge. Membership is just £15 per
            person per year.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/join"
              className="inline-flex items-center justify-center rounded-full bg-green px-7 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Join B123 Walks
            </Link>
            <Link
              to="/walks"
              className="inline-flex items-center justify-center rounded-full border border-navy-foreground/30 px-7 py-4 text-base font-bold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              Find a Walk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
