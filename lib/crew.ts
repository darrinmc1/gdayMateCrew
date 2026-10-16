export type Member = { name: string; title: string; animal: string; trade: string; bio: string; line: string; short?: string; img?: string };
export const locked: Member[] = [
  { name: "Matt", title: "Matt the Metal Fabricator", animal: "Magpie", trade: "metal", img: "matt-the-magpie.jpg", bio: "Swoops anyone with a shiny tool. Hoards scrap. Remembers every stuff-up from last season.", line: "It's not lost, it's stored.", short: "If it's shiny, it's not lost. It's stored." },
  { name: "Cookie", title: "Cookie the Colour Master", animal: "Kookaburra", trade: "painter", img: "cookie-the-kookaburra.jpg", bio: "On the ladder at five. Laughs the street awake. Dive-bombs anyone near wet paint.", line: "HAHAHA! That's a masterpiece.", short: "Starts at five. Laughs the suburb awake." },
  { name: "Dazza", title: "Dazza the Demolition Expert", animal: "Tasmanian Devil", trade: "demo", img: "dazza-the-tassie-devil.jpg", bio: "Spins when he's keen. Lunch lasts thirty seconds. Bites through the problem.", line: "Ten percent planning. Ninety percent spinning.", short: "Ten percent plan. Ninety percent spin." },
  { name: "Eddie", title: "Eddie the Electrician", animal: "Emu", trade: "sparky", img: "eddie-the-electrician.jpg", bio: "Runs between jobs. Feathers still a bit 240. Tests it twice.", line: "Current situation under control.", short: "Runs the jobs. Feathers still a bit 240." },
  { name: "Quinny", title: "Quinny the Quick Learner", animal: "Quokka", trade: "apprentice", img: "quinny-the-quokka.jpg", bio: "Permanent smile. Phone glued on. Tourists turn up. The job's in the background of the selfie.", line: "This is going straight on the 'gram.", short: "Selfie first. The job's in the background." },
  { name: "Sammy", title: "Sammy the Safety Inspector", animal: "Red-belly black snake", trade: "inspector", img: "sammy-the-site-inspector.jpg", bio: "Silent. Already behind you. Red-belly vest.", line: "I've been watching you...", short: "Silent. Already behind you." },
  { name: "Pauly", title: "Pauly the Plasterer", animal: "Brushtail possum", trade: "plasterer", img: "pauly-the-plasterer.jpg", bio: "Covered in plaster. Upside down on the ceiling. Plays dead if the boss walks in.", line: "Smooth as a possum's bottom.", short: "Hangs around until it's dry." },
  { name: "Craig", title: "Craig the Crane Operator", animal: "Saltwater crocodile", trade: "crane", img: "craig-the-croc.jpg", bio: "Barely fits in the cabin. Territorial about the crane. Death-rolls a tangled cable.", line: "Snappy service, mate.", short: "Territorial about the cabin. Snappy service." },
];
const b = (title: string, animal: string, trade: string, bio: string): Member => ({ name: title.split(" ")[0], title, animal, trade, bio, line: "" });
export const bible: Member[] = [
  b("Kevvy the Chippy","Koala","carpenter","Falls asleep standing up with the saw running. Measures twice, naps once."),
  b("Pete the Plumber","Platypus","plumber","Always slightly damp. Bill finds leaks three suburbs over. Eggs turn up in toolboxes."),
  b("Rodney the Roofer","Red kangaroo","roof dog","Tail for balance. Gloves on the belt. Yells at every driver between jobs."),
  b("Wally the Welder","Wombat","metal muncher","Low and slow. Hoards scrap underground. Cube-shaped weld marks. Doesn't rush."),
  b("Larry the Labourer","Blue-tongue skink","site muscle","Looks like trouble. Turns up helpful. Scales the wall. Sheds after a rough day."),
  b("Timmy the Tiler","Tasmanian tiger","specialist tiler","Stripes for a ruler. Spins if the grout line's off. Last of the good ones."),
  b("Gary the Gardener","Gecko","wall walker","Walks the hedge vertical. Tail turns up in the toolbox. Colour matches the plants."),
  b("Greg the Gas Fitter","Galah","gas","Pink kit. One eyebrow missing. Whoopee cushion at the safety meeting. Blew the feathers off once. No worries."),
  b("Kenny the Kiwi","Kiwi","ground control","Small. Everyone listens. Beak in the tight spots. Sweet as, bro."),
  b("Kyle the Site Comms","Kakapo","boom box","Nights only. Voice carries five kay. Flightless. Still on the scaffold. Come in, over."),
  b("Toby the Trainer","Tui","copycat boss","White collar. Repeats the briefing twice. Does every tool noise. As I was saying..."),
  b("Wayne the Weka","Weka","bricky","Ground work. Pockets anything shiny. Finders keepers."),
  b("Kurt the Concreter","Kaka","concrete","Harsh voice. Works in a flock. Set in stone, mate. *cough*"),
  b("Robby the Redbreast Decorator","Robin","interiors","Cute until you question the palette. Red chest like a paint apron. That shade is last season."),
  b("Harold the H&S Inspector","Hedgehog","prickly safety","Finds a hazard in the smoko urn. Rolls into a ball if you argue. Don't get prickly."),
  b("Andy the Apprentice","Echidna","hungover spiky","Late. Wristbands on. Energy drink half gone. Yeah nah, I'm sweet as."),
  b("Terry the Tool Rep","Cane toad","salesman","Turns up at the worst time. Blocks the doorway. Catalogues breed in the lunch room."),
  b("Bazza the Builder","Bilby","burrow boss","Big ears. Calls smoko early for a sausage roll. Tools vanish into the tunnel. After a cuppa."),
  b("Ray the Union Rep","Redback","site delegate","Small. Clipboard. Turns a cold tea into a site meeting. If it's not in writing, it's not happening."),
];
export const INSTAGRAM = "https://instagram.com/gdaymatecrew";
