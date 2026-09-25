import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { facebookUrl, instagramUrl, tiktokUrl, whatsappCommunityUrl } from "@/data/site";
import contactSocialImage from "@/assets/contact-social.jpg";

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
            "Connect with B123 Walks — find us on Facebook, Instagram, TikTok and our WhatsApp community.",
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
  { icon: Facebook, label: "Facebook Group", detail: "Sharing past events and promoting the group", href: facebookUrl },
  { icon: MessageCircle, label: "WhatsApp Community", detail: "Chat with members day to day", href: whatsappCommunityUrl },
  { icon: Instagram, label: "Instagram", detail: "Photos and videos from our walks", href: instagramUrl },
  { icon: TikTokIcon, label: "TikTok", detail: "Short videos from our walks", href: tiktokUrl },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        intro="Whether you've a question about a particular walk or you'd just like to know more about the group, we're happy to help."
      />

      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-card">
          <img
            src={contactSocialImage}
            alt="Walkers on a countryside walk smiling as they share photos on a phone"
            width={1024}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

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
              The best way to connect with us is by joining our WhatsApp community — members
              share upcoming walks, photos and reminders there.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
