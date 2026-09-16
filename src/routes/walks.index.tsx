import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Users, Footprints, Compass, HeartHandshake, Facebook, Heart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { facebookUrl, whatsappCommunityUrl, tiktokUrl } from "@/data/site";
import communityImage from "@/assets/b123-walkers-group.jpg.asset.json";

export const Route = createFileRoute("/walks/")({
  head: () => ({
    meta: [
      { title: "Our Walks — Community, Wellness & Friendship in the Midlands" },
      {
        name: "description",
        content:
          "B123 Walks is about community, wellbeing and getting outdoors together. Discover how walking boosts health, builds friendships and creates new experiences across the Midlands.",
      },
      { property: "og:title", content: "Our Walks — Community, Wellness & Friendship" },
      {
        property: "og:description",
        content:
          "Walking for mental health, physical fitness, friendship and new experiences — with a welcoming Midlands community.",
      },
    ],
  }),
  component: WalksPage,
});

const pillars = [
  {
    icon: Brain,
    title: "Mental health & wellbeing",
    text: "Walking outdoors is one of the simplest ways to clear your head, lower stress and lift your mood. Our walks give you space to breathe, notice the seasons and leave the week behind.",
  },
  {
    icon: Users,
    title: "Social connection & friendship",
    text: "Many of our members joined on their own and quickly found friends. Walks are naturally social — there's always someone to chat with, and nobody is left out.",
  },
  {
    icon: Footprints,
    title: "Physical health & fitness",
    text: "From gentle local strolls to longer countryside routes, walking keeps you moving at your own pace. No gym needed — just good company and fresh Midlands air.",
  },
  {
    icon: Compass,
    title: "New life experiences",
    text: "Discover places you didn't know existed, watch the landscape change through the year, and enjoy the small adventures that come with stepping outside your routine.",
  },
  {
    icon: HeartHandshake,
    title: "Our walking ethos",
    text: "We walk as a group, at a comfortable social pace, with regular stops to regroup. New walkers, slow walkers and chatty walkers are all equally welcome.",
  },
];

function WalksPage() {
  return (
    <>
      <PageHero
        eyebrow="Our walks"
        title="Walking Together"
        intro="B123 Walks is about much more than miles. It's about community, wellbeing, friendship and getting outdoors — at a pace that suits everyone."
      />

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Every walk is a chance to feel better — physically, mentally and socially. Whether
              you're looking for gentle exercise, friendly faces, a break from a busy week, or the
              joy of discovering a new path, you'll find it here.
            </p>
            <p>
              We walk across the West Midlands and beyond — Worcestershire, Birmingham,
              Warwickshire, Shropshire, Staffordshire and the wider Midlands. Hills, canals,
              woodlands, villages and open fields.
            </p>
            <p className="font-display text-2xl text-foreground">Walk. Talk. Connect.</p>
          </div>

          <img
            src={communityImage}
            alt="B123 Walks members enjoying a tea break together in the Midlands countryside"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full rounded-4xl object-cover shadow-lift"
          />
        </div>
      </section>

      <section className="bg-secondary/50 py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-wide uppercase text-green">Why we walk</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">A walk can change your day — and your life</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">
              People join B123 Walks for all sorts of reasons. Here's what you'll find when you come
              along.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-7"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                  <pillar.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl">{pillar.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="rounded-4xl bg-navy px-6 py-14 text-center text-navy-foreground md:px-16">
          <p className="text-sm font-bold tracking-wide uppercase text-navy-foreground/70">
            Our promise on every walk
          </p>
          <p className="mt-4 font-display text-3xl tracking-[0.12em] uppercase text-accent sm:text-5xl">
            No one left behind
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-navy-foreground/80">
            We walk together, at a comfortable social pace, with regular stops to regroup. Nobody
            gets stranded at the back and nobody is made to feel out of place.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green px-7 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Join B123 Walks
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-4 text-base font-bold text-foreground transition-opacity hover:opacity-90"
            >
              <Facebook className="size-5" />
              Facebook Group
            </a>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-4xl border border-border bg-card p-7 shadow-card md:p-9">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                <Heart className="size-6 text-green" />
              </span>
              <h2 className="mt-5 text-2xl sm:text-3xl">Ready to walk with us?</h2>
              <p className="mt-3 text-lg leading-relaxed text-foreground/75">
                New walkers are always welcome. Come along to a walk, see how it feels, and join the
                conversation.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={whatsappCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-green px-6 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Join our WhatsApp community
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-base font-bold text-foreground transition-colors hover:bg-secondary"
                >
                  <Facebook className="size-5" />
                  Join our Facebook group
                </a>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-base font-bold text-foreground transition-colors hover:bg-secondary"
                >
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  Watch on TikTok
                </a>
                <Link
                  to="/safety"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-4 text-base font-bold text-foreground transition-colors hover:bg-secondary"
                >
                  Walk safety & what to bring
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm font-bold tracking-wide uppercase text-green">Find your walk</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Where to find upcoming walks</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">
              We don't keep a fixed calendar on the website. Instead, upcoming walks are announced
              in our Facebook group and WhatsApp community, so you always hear about them first.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-green" />
                <span>Facebook group — every new walk is posted here.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-green" />
                <span>WhatsApp community — chat, lifts and last-minute updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-green" />
                <span>TikTok — see our walks in action before you join.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
