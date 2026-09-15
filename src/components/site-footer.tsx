import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { facebookUrl, instagramUrl, tiktokUrl, whatsappCommunityUrl } from "@/data/site";
import logoAsset from "@/assets/b123-footer-logo-white.png.asset.json";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

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
          <img
            src={logoAsset.url}
            alt="B123 Walks"
            width={250}
            height={41}
            className="h-10 w-auto"
          />
          <p className="mt-3 text-lg text-navy-foreground/80">Walk. Talk. Connect.</p>
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
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="B123 Walks on TikTok"
              className="grid size-11 place-items-center rounded-2xl bg-navy-foreground/10 transition-colors hover:bg-navy-foreground/20"
            >
              <TikTokIcon className="size-5" />
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
