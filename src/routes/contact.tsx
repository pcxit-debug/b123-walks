import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { facebookUrl, instagramUrl, tiktokUrl, whatsappCommunityUrl } from "@/data/site";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact B123 Walks — Get in Touch" },
      {
        name: "description",
        content:
          "Get in touch with B123 Walks. Send us a message or find us on Facebook, Instagram and our WhatsApp community.",
      },
      { property: "og:title", content: "Contact B123 Walks" },
      {
        property: "og:description",
        content: "Questions about a walk or joining? Say hello — we'd love to hear from you.",
      },
    ],
  }),
  component: ContactPage,
});

const socials = [
  { icon: Facebook, label: "Facebook Group", detail: "Find walks and updates", href: facebookUrl },
  { icon: MessageCircle, label: "WhatsApp Community", detail: "Chat with members day to day", href: whatsappCommunityUrl },
  { icon: Instagram, label: "Instagram", detail: "Photos from our latest walks", href: instagramUrl },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    toast("Thanks for your message", {
      description: "We'll get back to you as soon as we can.",
    });
    event.currentTarget.reset();
  }

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-base outline-none focus:border-green focus:ring-2 focus:ring-ring/40";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        intro="Whether you've a question about a particular walk or you'd just like to know more about the group, we're happy to help."
      />

      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_1fr] md:py-16">
        <form onSubmit={handleSubmit} className="rounded-4xl border border-border bg-card p-6 shadow-card md:p-8">
          <div>
            <label htmlFor="name" className="text-sm font-bold">
              Name
            </label>
            <input id="name" name="name" required autoComplete="name" className={fieldClass} />
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="text-sm font-bold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="phone" className="text-sm font-bold">
              Phone number <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-bold">
              Message
            </label>
            <textarea id="message" name="message" rows={5} required className={fieldClass} />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-green px-6 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send Message
          </button>

          {sent && (
            <p className="mt-4 text-sm font-semibold text-green">
              Thanks — your message has been noted. We'll be in touch soon.
            </p>
          )}
        </form>

        <div className="space-y-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-card transition-colors hover:bg-secondary/60"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                <social.icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold">{social.label}</span>
                <span className="block truncate text-sm text-muted-foreground">
                  {social.detail}
                </span>
              </span>
            </a>
          ))}

          <div className="rounded-3xl bg-secondary/70 p-6">
            <h2 className="text-lg">Walk. Talk. Connect.</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              The best way to find a walk is through our Facebook group — members post upcoming
              walks, photos and reminders there.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
