import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import woodland from "@/assets/gallery-woodland.jpg";
import canal from "@/assets/gallery-canal.jpg";
import hills from "@/assets/gallery-hills.jpg";
import village from "@/assets/gallery-village.jpg";
import social from "@/assets/gallery-social.jpg";
import bridge from "@/assets/gallery-bridge.jpg";
import fields from "@/assets/gallery-fields.jpg";
import hero from "@/assets/hero-walkers.jpg";
import camino from "@/assets/gallery-camino.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — B123 Walks in the Midlands Countryside" },
      {
        name: "description",
        content:
          "Photos from B123 Walks: Midlands countryside, woodland, hills, canals, villages, group walks and social moments.",
      },
      { property: "og:title", content: "Gallery — B123 Walks" },
      {
        property: "og:description",
        content: "Woodland, hills, canals, villages and plenty of smiles.",
      },
    ],
  }),
  component: GalleryPage,
});

/**
 * To add a photo: put the image in src/assets, import it above and add an
 * entry to this list with a short caption and alt description.
 */
const photos = [
  { src: hero, alt: "Group of walkers on a countryside path at golden hour", caption: "Group walks" },
  { src: woodland, alt: "Bluebell woodland path with tall beech trees", caption: "Woodland" },
  { src: hills, alt: "Walkers chatting at a hilltop viewpoint over green fields", caption: "Hills" },
  { src: canal, alt: "Canal towpath with a narrowboat and green banks", caption: "Canals" },
  { src: village, alt: "Stone cottages along a quiet English village lane", caption: "Villages" },
  { src: social, alt: "Walkers laughing together over a flask of tea", caption: "Social moments" },
  { src: bridge, alt: "Two walkers crossing a wooden footbridge in woodland", caption: "On the trail" },
  { src: fields, alt: "Green Midlands farmland with a footpath and big cloudy sky", caption: "Midlands countryside" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Out and about with B123 Walks"
        intro="A few favourite moments from our walks. More photos are added after every outing."
      />

      {/* Events & walk types — square panels. To add one: drop an image in
          src/assets, import it above and add an entry. */}
      <section className="container-page pb-12 md:pb-16">
        <h2 className="font-heading text-3xl font-semibold text-primary md:text-4xl">
          Events
        </h2>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Our bigger adventures — and the kinds of walking we do.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {eventPanels.map((panel) => (
            <figure
              key={panel.title}
              className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-card"
            >
              <img
                src={panel.src}
                alt={panel.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/85 via-primary/30 to-transparent p-4 md:p-6">
                {panel.eyebrow && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-warm md:text-xs">
                    {panel.eyebrow}
                  </span>
                )}
                <span className="mt-0.5 font-heading text-xl font-semibold text-white md:text-2xl">
                  {panel.title}
                </span>
                <span className="mt-1 text-xs leading-snug text-white/90 md:text-sm">
                  {panel.description}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
