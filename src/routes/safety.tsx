import { createFileRoute, Link } from "@tanstack/react-router";
import { Footprints, CloudRain, Droplets, Sandwich, Megaphone, MessagesSquare, HandHeart, Leaf } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Walk Information & Safety — B123 Walks" },
      {
        name: "description",
        content:
          "What to wear and bring on a B123 Walks group walk, plus how our walk leaders keep everyone comfortable and safe in the Midlands countryside.",
      },
      { property: "og:title", content: "Walk Information & Safety — B123 Walks" },
      {
        property: "og:description",
        content: "Simple, friendly guidance on footwear, clothing, water and walking together.",
      },
    ],
  }),
  component: SafetyPage,
});

const tips = [
  {
    icon: Footprints,
    title: "Wear suitable footwear",
    text: "Walking boots or sturdy trainers with a good grip. Midlands paths can be muddy at any time of year.",
  },
  {
    icon: CloudRain,
    title: "Dress for the weather",
    text: "Layers work best, plus a waterproof if rain is on the way. A hat in summer, gloves in winter.",
  },
  {
    icon: Droplets,
    title: "Carry enough water",
    text: "Bring more than you think you'll need, especially on longer or warmer walks.",
  },
  {
    icon: Sandwich,
    title: "Bring food and snacks",
    text: "For longer walks, pack a picnic or a few snacks for our stops along the way.",
  },
  {
    icon: Megaphone,
    title: "Follow the walk leader",
    text: "Your leader knows the route and the conditions — please stick with the group and follow their instructions.",
  },
  {
    icon: MessagesSquare,
    title: "Just ask",
    text: "If you're unsure about anything to do with the walks, ask a leader or any of the other regular walkers — everyone will be pleased to assist.",
  },
  {
    icon: HandHeart,
    title: "Tell us if you're struggling",
    text: "Never suffer in silence. A quiet word with the leader and we'll slow down, take a break or adjust the route.",
  },
  {
    icon: Leaf,
    title: "Respect the countryside",
    text: "Close gates, keep to paths, take litter home and be considerate of other walkers, farmers and wildlife.",
  },
];

function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Before you set off"
        title="Walk Information & Safety"
        intro="Nothing complicated — just a few sensible things that make every walk more enjoyable for everyone."
      />

      <div className="container-page py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="flex min-w-0 items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                <tip.icon className="size-5" />
              </span>
              <div className="min-w-0">
                <h2 className="text-lg">{tip.title}</h2>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-4xl bg-secondary/70 p-7 md:p-10">
          <h2 className="text-2xl">A word about walk leaders</h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-foreground/80">
            Our walk leaders are volunteers who want everyone to have a good day. Occasionally a
            leader may decide that someone isn't suitably equipped for a particular walk where there
            is a genuine safety concern — for example open hills in poor weather without proper
            footwear or waterproofs. It's never personal, and there's always another walk to join.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/walks"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground"
            >
              Find a Walk
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-4 text-base font-bold text-foreground"
            >
              Ask us a question
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
