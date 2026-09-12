import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappCommunityUrl } from "@/data/site";
import logoAsset from "@/assets/b123-logo-green.png.asset.json";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/walks", label: "Our Walks" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/safety", label: "Walk Safety" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logoAsset.url}
            alt="B123 Walks"
            width={160}
            height={40}
            className="h-9 w-auto shrink-0"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground"
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-green px-4 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join B123 Walks
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-2xl border border-border bg-card lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-base font-semibold text-foreground/90 transition-colors hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-green px-4 py-4 text-center text-base font-bold text-primary-foreground"
            >
              Join B123 Walks
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
