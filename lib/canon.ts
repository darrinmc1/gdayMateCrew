export const brand = "The G'Day Mate Construction Crew";
export const tagline = "Job Site Comedy";
export const handle = "@gdaymatecrew";
export const siteUrl = "https://gdaymatecrew.com";
export const email = "contact@gdaymatecrew.com";

export const heroLine = "Aussie animal tradies on the tools.";

export const homeAbout =
  "Aussie animal tradies on the tools. Skits from the job site, not a safety briefing. Twenty-seven in the crew. Eight have portraits. The rest are on site as text. Official mark is the yellow diamond — four tradies, hard hats, no new logo.";

export type LockedMate = {
  slug: "matt" | "cookie" | "dazza" | "eddie" | "quinny" | "sammy" | "pauly" | "craig";
  name: string;
  species: string;
  trade: string;
  homeTrade: string;
  homeLine: string;
  portrait: string;
};

/** Locked eight. Portraits only for these. Public emu name is Eddie. */
export const lockedEight: LockedMate[] = [
  {
    slug: "matt",
    name: "Matt",
    species: "magpie",
    trade: "metal",
    homeTrade: "metal",
    homeLine: "If it's shiny, it's not lost. It's stored.",
    portrait: "/crew/matt.jpg",
  },
  {
    slug: "cookie",
    name: "Cookie",
    species: "kookaburra",
    trade: "painter",
    homeTrade: "colour",
    homeLine: "Starts at five. Laughs the suburb awake.",
    portrait: "/crew/cookie.jpg",
  },
  {
    slug: "dazza",
    name: "Dazza",
    species: "Tassie devil",
    trade: "demo",
    homeTrade: "demo",
    homeLine: "Ten percent plan. Ninety percent spin.",
    portrait: "/crew/dazza.jpg",
  },
  {
    slug: "eddie",
    name: "Eddie",
    species: "emu",
    trade: "electrician",
    homeTrade: "sparky",
    homeLine: "Runs the jobs. Feathers still a bit 240.",
    portrait: "/crew/eddie.jpg",
  },
  {
    slug: "quinny",
    name: "Quinny",
    species: "quokka",
    trade: "apprentice",
    homeTrade: "apprentice",
    homeLine: "Selfie first. The job's in the background.",
    portrait: "/crew/quinny.jpg",
  },
  {
    slug: "sammy",
    name: "Sammy",
    species: "red-belly",
    trade: "inspector",
    homeTrade: "inspector",
    homeLine: "Silent. Already behind you.",
    portrait: "/crew/sammy.jpg",
  },
  {
    slug: "pauly",
    name: "Pauly",
    species: "possum",
    trade: "plasterer",
    homeTrade: "plasterer",
    homeLine: "Hangs around until it's dry.",
    portrait: "/crew/pauly.jpg",
  },
  {
    slug: "craig",
    name: "Craig",
    species: "saltie",
    trade: "crane",
    homeTrade: "crane",
    homeLine: "Territorial about the cabin. Snappy service.",
    portrait: "/crew/craig.jpg",
  },
];

/** Bible-only. Text only. No portraits. No invented stills. */
export const bibleOnly = [
  "Kevvy",
  "Pete",
  "Rodney",
  "Wally",
  "Larry",
  "Timmy",
  "Gary",
  "Greg",
  "Kenny",
  "Kyle",
  "Toby",
  "Wayne",
  "Kurt",
  "Robby",
  "Harold",
  "Andy",
  "Terry",
  "Bazza",
  "Ray",
] as const;

export const rosterCount = lockedEight.length + bibleOnly.length;

if (rosterCount !== 27) {
  throw new Error(`Roster must be 27. Got ${rosterCount}.`);
}

export const aboutMission = [
  "Job Site Comedy. That's the job.",
  "Not a safety briefing. Not a brand deck. Not a feel-good campaign.",
  "Eddie is the public emu name.",
] as const;

export const aboutWhatThisIs = [
  "Aussie animal tradies on the tools.",
  "Skits from the job site.",
  "Twenty-seven in the crew. Eight have portraits. The rest are on site as text.",
] as const;

export const aboutWhatThisIsnt = [
  "Not a real construction company.",
  "Not a safety course.",
  "Not “Australia’s Funniest Tradies”.",
  "Not an awards reel.",
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/crew", label: "Crew" },
  { href: "/contact", label: "Contact" },
] as const;
