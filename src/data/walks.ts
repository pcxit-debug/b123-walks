/**
 * B123 Walks — upcoming walks.
 *
 * To add a walk: copy a block below and change the details.
 * To remove a walk: delete its block.
 * `tags` control the filters shown on the Upcoming Walks page:
 *   "shorter" (under 6 miles), "longer" (6 miles or more),
 *   "weekend" (Saturday/Sunday walks), "evening" (evening start times).
 */

export type WalkTag = "shorter" | "longer" | "weekend" | "evening";

export type Walk = {
  slug: string;
  title: string;
  location: string;
  date: string; // e.g. "Saturday 19 September 2026"
  startTime: string; // e.g. "10:00am"
  distance: string; // e.g. "5 miles"
  duration: string; // e.g. "About 2.5 hours"
  difficulty: "Easy" | "Moderate" | "Challenging";
  leader: string;
  meetingPoint: string;
  description: string;
  tags: WalkTag[];
};

export const walks: Walk[] = [
  {
    slug: "clent-hills-sunday-stroll",
    title: "Clent Hills Sunday Stroll",
    location: "Clent Hills, Worcestershire",
    date: "Sunday 20 September 2026",
    startTime: "10:00am",
    distance: "4.5 miles",
    duration: "About 2 hours",
    difficulty: "Easy",
    leader: "Dave M.",
    meetingPoint: "Nimmings Wood car park, Hagley (pay & display)",
    description:
      "A gentle loop through woodland and open hilltop with lovely views back over Birmingham. Perfect for a first walk with us, with a cafe stop at the end.",
    tags: ["shorter", "weekend"],
  },
  {
    slug: "kinver-edge-and-rock-houses",
    title: "Kinver Edge & the Rock Houses",
    location: "Kinver, Staffordshire",
    date: "Saturday 26 September 2026",
    startTime: "9:30am",
    distance: "7 miles",
    duration: "About 3.5 hours",
    difficulty: "Moderate",
    leader: "Sue P.",
    meetingPoint: "Kinver Edge main car park, Comber Road",
    description:
      "Sandstone ridges, heathland and the famous rock houses. A few steady climbs, plenty of pauses and a picnic stop with a big view.",
    tags: ["longer", "weekend"],
  },
  {
    slug: "canalside-evening-amble",
    title: "Canalside Evening Amble",
    location: "Brindleyplace to Bournville, Birmingham",
    date: "Wednesday 30 September 2026",
    startTime: "6:15pm",
    distance: "3.5 miles",
    duration: "About 1.5 hours",
    difficulty: "Easy",
    leader: "Raj K.",
    meetingPoint: "Outside the Ikon Gallery, Brindleyplace",
    description:
      "A flat, easy-going towpath walk as the evening light goes golden. Ideal after work, finishing near a tram stop and a friendly pub.",
    tags: ["shorter", "evening"],
  },
  {
    slug: "malvern-hills-ridge-walk",
    title: "Malvern Hills Ridge Walk",
    location: "Great Malvern, Worcestershire",
    date: "Sunday 11 October 2026",
    startTime: "9:00am",
    distance: "9 miles",
    duration: "About 4.5 hours",
    difficulty: "Challenging",
    leader: "Helen B.",
    meetingPoint: "Great Malvern railway station forecourt",
    description:
      "Our favourite big day out. A steady ridge route with some proper climbing, wide Midlands views and a long lunch stop at the top.",
    tags: ["longer", "weekend"],
  },
  {
    slug: "kenilworth-castle-fields",
    title: "Kenilworth Castle & Fields",
    location: "Kenilworth, Warwickshire",
    date: "Saturday 17 October 2026",
    startTime: "10:30am",
    distance: "5.5 miles",
    duration: "About 2.5 hours",
    difficulty: "Easy",
    leader: "Mark T.",
    meetingPoint: "Abbey Fields car park, Bridge Street",
    description:
      "Meadows, quiet lanes and castle views on a relaxed morning route. Mostly level with a couple of stiles along the way.",
    tags: ["shorter", "weekend"],
  },
  {
    slug: "wyre-forest-woodland-wander",
    title: "Wyre Forest Woodland Wander",
    location: "Bewdley, Worcestershire",
    date: "Thursday 22 October 2026",
    startTime: "6:00pm",
    distance: "4 miles",
    duration: "About 2 hours",
    difficulty: "Moderate",
    leader: "Jackie R.",
    meetingPoint: "Wyre Forest Discovery Centre car park",
    description:
      "An autumn evening walk through the forest with head torches for the last stretch. Bring a light and a warm layer.",
    tags: ["shorter", "evening"],
  },
];

export const walkFilters: { id: "all" | WalkTag; label: string }[] = [
  { id: "all", label: "All Walks" },
  { id: "shorter", label: "Shorter Walks" },
  { id: "longer", label: "Longer Walks" },
  { id: "weekend", label: "Weekend Walks" },
  { id: "evening", label: "Evening Walks" },
];
