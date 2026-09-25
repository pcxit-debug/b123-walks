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

    </>
  );
}
