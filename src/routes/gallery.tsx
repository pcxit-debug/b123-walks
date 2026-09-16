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

      {/* Events — big days out get their own banner. To add an event:
          drop an image in src/assets, import it above and add an entry. */}
      <section className="container-page pb-12 md:pb-16">
        <h2 className="font-heading text-3xl font-semibold text-primary md:text-4xl">
          Events
        </h2>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Our bigger adventures and special days out.
        </p>

        <figure className="relative mt-8 overflow-hidden rounded-3xl border border-border shadow-card">
          <img
            src={camino}
            alt="Walkers with backpacks on a sunlit Camino path beside a stone waymarker with a yellow scallop shell and arrow"
            width={1792}
            height={768}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] md:aspect-[21/8]"
          />
          <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/85 via-primary/30 to-transparent p-6 md:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-warm">
              B123 Walks Event
            </span>
            <span className="mt-1 font-heading text-3xl font-semibold text-white md:text-5xl">
              The Camino
            </span>
            <span className="mt-2 max-w-xl text-sm text-white/90 md:text-base">
              Our biggest adventure yet — following the yellow arrows together.
              Photos and stories to come.
            </span>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
