import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { facebookUrl, instagramUrl, whatsappCommunityUrl } from "@/data/site";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/walks", label: "Our Walks" },
  { to: "/about", label: "About" },
  { to: "/join", label: "Join Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/safety", label: "Walk Safety" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-semibold">B123 Walks</h2>
          <p className="mt-1 text-lg text-navy-foreground/80">Walk. Talk. Connect.</p>
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">
            A friendly community walking group exploring the West Midlands and surrounding
            countryside. No one left behind.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={facebookUrl}
              aria-label="B123 Walks on Facebook"
              className="grid size-11 place-items-center rounded-2xl bg-navy-foreground/10 transition-colors hover:bg-navy-foreground/20"
            >
              <Facebook className="size-5" />
            </a>
            <a
              href={whatsappCommunityUrl}
              aria-label="B123 Walks WhatsApp Community"
              className="grid size-11 place-items-center rounded-2xl bg-navy-foreground/10 transition-colors hover:bg-navy-foreground/20"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href={instagramUrl}
              aria-label="B123 Walks on Instagram"
              className="grid size-11 place-items-center rounded-2xl bg-navy-foreground/10 transition-colors hover:bg-navy-foreground/20"
            >
              <Instagram className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide uppercase text-navy-foreground/60">
            Explore
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} B123 Walks. A community walking group.</p>
          <p className="flex gap-4">
            <span>Privacy Policy (coming soon)</span>
            <span>Terms &amp; Conditions (coming soon)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
