/**
 * B123 Walks — past walks.
 *
 * Upcoming walks are announced in the WhatsApp community, so this list is
 * simply a record of walks we've already done.
 *
 * To add a walk: copy a block below and change the details.
 * To remove a walk: delete its block.
 * `tags` control the filters shown on the Past Walks page:
 *   "shorter" (under 6 miles), "longer" (6 miles or more),
 *   "weekend" (Saturday/Sunday walks), "evening" (evening start times).
 */

export type WalkTag = "shorter" | "longer" | "weekend" | "evening";

export type Walk = {
  slug: string;
  title: string;
  location: string;
  date: string; // e.g. "Sunday 20 September 2026"
  distance: string; // e.g. "5 miles"
  difficulty: "Easy" | "Moderate" | "Challenging";
  description: string;
  tags: WalkTag[];
};

export const walks: Walk[] = [
  {
    slug: "kenilworth-castle-fields",
    title: "Kenilworth Castle & Fields",
    location: "Kenilworth, Warwickshire",
    date: "Saturday 22 August 2026",
    distance: "5.5 miles",
    difficulty: "Easy",
    description:
      "Meadows, quiet lanes and castle views on a relaxed morning route, finishing with coffee in Abbey Fields.",
    tags: ["shorter", "weekend"],
  },
  {
    slug: "wyre-forest-woodland-wander",
    title: "Wyre Forest Woodland Wander",
    location: "Bewdley, Worcestershire",
    date: "Thursday 13 August 2026",
    distance: "4 miles",
    difficulty: "Moderate",
    description:
      "A summer evening walk through the forest, with the last stretch back along the river as the light faded.",
    tags: ["shorter", "evening"],
  },
  {
    slug: "malvern-hills-ridge-walk",
    title: "Malvern Hills Ridge Walk",
    location: "Great Malvern, Worcestershire",
    date: "Sunday 26 July 2026",
    distance: "9 miles",
    difficulty: "Challenging",
    description:
      "Our favourite big day out — a steady ridge route with proper climbing, wide Midlands views and a long lunch stop at the top.",
    tags: ["longer", "weekend"],
  },
  {
    slug: "canalside-evening-amble",
    title: "Canalside Evening Amble",
    location: "Brindleyplace to Bournville, Birmingham",
    date: "Wednesday 15 July 2026",
    distance: "3.5 miles",
    difficulty: "Easy",
    description:
      "A flat, easy-going towpath walk in golden evening light, finishing near a tram stop and a friendly pub.",
    tags: ["shorter", "evening"],
  },
  {
    slug: "kinver-edge-and-rock-houses",
    title: "Kinver Edge & the Rock Houses",
    location: "Kinver, Staffordshire",
    date: "Saturday 27 June 2026",
    distance: "7 miles",
    difficulty: "Moderate",
    description:
      "Sandstone ridges, heathland and the famous rock houses, with plenty of pauses and a picnic stop with a big view.",
    tags: ["longer", "weekend"],
  },
  {
    slug: "clent-hills-sunday-stroll",
    title: "Clent Hills Sunday Stroll",
    location: "Clent Hills, Worcestershire",
    date: "Sunday 14 June 2026",
    distance: "4.5 miles",
    difficulty: "Easy",
    description:
      "A gentle loop through woodland and open hilltop with lovely views back over Birmingham, and a cafe stop at the end.",
    tags: ["shorter", "weekend"],
  },
];

export const walkFilters: { id: "all" | WalkTag; label: string }[] = [
  { id: "all", label: "All Walks" },
  { id: "shorter", label: "Shorter Walks" },
  { id: "longer", label: "Longer Walks" },
  { id: "weekend", label: "Weekend Walks" },
  { id: "evening", label: "Evening Walks" },
];
