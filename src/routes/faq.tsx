import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — B123 Walks" },
      {
        name: "description",
        content:
          "Common questions about walking with B123 Walks: coming on your own, experience needed, where we walk, membership costs and what to bring.",
      },
      { property: "og:title", content: "FAQ — B123 Walks" },
      {
        property: "og:description",
        content: "Everything you might want to know before your first walk with us.",
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Can I come on my own?",
    a: "Absolutely. Lots of people join us on their own and quickly get to know people.",
  },
  {
    q: "Do I need to be an experienced walker?",
    a: "No. Check the distance and difficulty of the walk and choose something you're comfortable with.",
  },
  {
    q: "Are your walks races?",
    a: "Definitely not. We're a social walking group.",
  },
  {
    q: "Where do you walk?",
    a: "Across the Midlands and surrounding countryside.",
  },
  {
    q: "How much is membership?",
    a: "£15 per person per year, with two introductory walks available before joining.",
  },
  {
    q: "What should I bring?",
    a: "Suitable footwear, appropriate clothing, water and anything recommended for that particular walk.",
  },
];

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Frequently Asked Questions"
        intro="If there's something else you'd like to know, just drop us a message — we're a friendly bunch."
      />

      <div className="container-page py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg">{faq.q}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/walks"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground"
          >
            Find a Walk
          </Link>
          <Link
            to="/join"
            className="inline-flex items-center justify-center rounded-full bg-green px-6 py-4 text-base font-bold text-primary-foreground"
          >
            Join B123 Walks
          </Link>
        </div>
      </div>
    </>
  );
}
