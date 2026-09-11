import { createFileRoute } from "@tanstack/react-router";
import { Check, Facebook } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { facebookUrl, whatsappCommunityUrl } from "@/data/site";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join B123 Walks — £15 a Year, Two Free Walks First" },
      {
        name: "description",
        content:
          "Come along to two introductory walks free of charge, then join B123 Walks for £15 per person per year. New walkers always welcome.",
      },
      { property: "og:title", content: "Join B123 Walks" },
      {
        property: "og:description",
        content: "Two free introductory walks, then membership is £15 per person per year.",
      },
    ],
  }),
  component: JoinPage,
});

const points = [
  "New walkers are welcome to come along and see what B123 Walks is all about.",
  "Membership is £15 per person per year.",
  "New members can attend two introductory walks free of charge before deciding whether they'd like to become members.",
  "Membership helps support the running of the group and its official organised walks.",
];

function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join us"
        title="Join B123 Walks"
        intro="Try us out first — there's no rush and no pressure. Come on a couple of walks, see how you get on, then decide."
      />

      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:py-20">
        <div>
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-lg leading-relaxed">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-green text-primary-foreground">
                  <Check className="size-4" />
                </span>
                <span className="text-foreground/80">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-lg leading-relaxed text-foreground/75">
            Not sure yet? Have a look at the walks we've enjoyed, or join our Facebook group
            where every new walk is announced, pick one that suits you and simply
            turn up. Say hello to the walk leader when you arrive and they'll look after you.
          </p>
        </div>

        <div className="rounded-4xl border border-border bg-card p-7 shadow-lift md:p-9">
          <p className="text-sm font-bold tracking-wide uppercase text-green">Membership</p>
          <p className="mt-3 font-display text-5xl">£15</p>
          <p className="mt-1 text-muted-foreground">per person, per year</p>

          <a
            href={whatsappCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex w-full items-center justify-center rounded-full bg-green px-6 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join B123 Walks
          </a>

          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-center text-base font-bold text-foreground transition-colors hover:bg-secondary"
          >
            <Facebook className="size-5" />
            Facebook Group
          </a>

          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Joining takes you to our WhatsApp community — that's where members chat, organise lifts
            and share walk photos.
          </p>
        </div>
      </div>
    </>
  );
}
