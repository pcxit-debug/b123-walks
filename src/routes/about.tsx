import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import socialImage from "@/assets/gallery-social.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About B123 Walks — A Midlands Walking Community" },
      {
        name: "description",
        content:
          "B123 Walks is a Midlands-based community of people who enjoy walking, friendship and the countryside. Friendly, relaxed and welcoming — no one left behind.",
      },
      { property: "og:title", content: "About B123 Walks" },
      {
        property: "og:description",
        content: "A friendly, relaxed and welcoming walking community in the West Midlands.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About B123 Walks"
        intro="We're a Midlands-based community of people who enjoy walking, friendship, countryside and getting outdoors."
      />

      <div className="container-page grid gap-10 py-14 md:grid-cols-2 md:items-start md:py-20">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            B123 Walks began with a simple idea: get outside, walk somewhere lovely and get to know
            the people walking beside you. We organise regular group walks across the West Midlands
            and surrounding areas — Worcestershire, Birmingham, Warwickshire, Shropshire,
            Staffordshire and the wider Midlands.
          </p>
          <p>
            Our walks range from shorter, easier local routes to longer countryside adventures, so
            there's usually something to suit however you're feeling.
          </p>
          <p>
            Please don't worry about arriving on your own. Many of our members originally joined
            without knowing anybody at all, and within a walk or two they were chatting away like
            old friends. The atmosphere is friendly, relaxed and welcoming — and we mean that.
          </p>
          <p className="font-display text-2xl text-foreground">Walk. Talk. Connect.</p>
        </div>

        <img
          src={socialImage}
          alt="B123 Walks members laughing together during a tea break in the countryside"
          width={1200}
          height={900}
          loading="lazy"
          className="w-full rounded-4xl object-cover shadow-lift"
        />
      </div>

      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-4xl bg-navy px-6 py-16 text-center text-navy-foreground md:px-16">
          <p className="text-sm font-bold tracking-wide uppercase text-navy-foreground/70">
            Our promise on every walk
          </p>
          <p className="mt-4 font-display text-3xl tracking-[0.12em] uppercase text-accent sm:text-5xl">
            No one left behind
          </p>
          <p className="mx-auto mt-6 max-w-xl text-navy-foreground/80">
            We walk as a group, at a comfortable social pace, with regular stops to regroup. Nobody
            gets stranded at the back.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/walks"
              className="inline-flex items-center justify-center rounded-full bg-green px-7 py-4 text-base font-bold text-primary-foreground"
            >
              Find a Walk
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center justify-center rounded-full bg-background px-7 py-4 text-base font-bold text-foreground"
            >
              Join B123 Walks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
