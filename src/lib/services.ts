export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  /** Short line used on cards and in the nav dropdown. */
  summary: string;
  /** Meta description for the service page. */
  metaDescription: string;
  /** Opening paragraphs on the service page. */
  intro: string[];
  /** "What we do" bullet list. */
  offerings: string[];
  /** Three-step "how it works" specific to this trade. */
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "building-construction",
    title: "Building & Construction",
    navLabel: "Building & Construction",
    summary:
      "Extensions, renovations, structural alterations and full property refurbishments, managed from footings to final coat.",
    metaDescription:
      "Extensions, renovations and structural building work in Portsmouth, Fareham, Havant and across Hampshire. Welton Property builds it properly, first time.",
    intro: [
      "Building work is the backbone of what we do. Whether you’re adding a rear extension to make room for a growing family, knocking through to open up a tired ground floor, or refurbishing a property top to bottom, we handle the whole build: groundworks, footings, structural steels, brickwork, roofing and the finishes that make it feel like home.",
      "We work on homes across Portsmouth and the surrounding south coast, and we keep the number of live jobs low on purpose. That means you know who is turning up, what they are doing that week, and when the next stage starts.",
    ],
    offerings: [
      "Single and double-storey extensions",
      "Loft conversions and garage conversions",
      "Structural alterations, steel beams and knock-throughs",
      "Full house renovations and refurbishments",
      "Groundworks, footings and drainage",
      "Brickwork, blockwork and repointing",
      "Roofing, fascias, soffits and guttering",
      "Kitchen and bathroom installation",
    ],
    process: [
      {
        title: "Survey and planning",
        body: "We visit, measure up and talk through what you want to achieve, then go away and work out properly what the job involves.",
      },
      {
        title: "Programme and preparation",
        body: "Before a spade goes in the ground we agree a start date and a realistic programme, sort building control sign-off, and make sure materials are ordered so the job doesn’t stall halfway through.",
      },
      {
        title: "Build and hand over",
        body: "A tidy site at the end of each day, and a proper snagging walk-round before we ask you for the final payment.",
      },
    ],
    faqs: [
      {
        q: "Do I need planning permission for an extension?",
        a: "Often not. Many single-storey rear extensions fall under permitted development. We’ll tell you at the survey stage which route applies to your property, and our architectural team can handle the application if you need one.",
      },
      {
        q: "How long does a typical extension take?",
        a: "A straightforward single-storey rear extension usually runs eight to twelve weeks from breaking ground to hand-over. We give you a week-by-week programme before we start so you can plan around it.",
      },
      {
        q: "Will I be left without a kitchen or bathroom?",
        a: "We sequence the work to keep you living in the house wherever possible, and we tell you up front about any period where a room genuinely has to be out of use.",
      },
    ],
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    navLabel: "Architectural Design",
    summary:
      "Measured surveys, drawings, planning applications and building regulations packages: the paperwork that gets your project approved.",
    metaDescription:
      "Architectural design, planning drawings and building regulations packages in Portsmouth and Hampshire. Welton Property takes your project from sketch to approval.",
    intro: [
      "A good build starts long before anyone picks up a trowel. Our architectural service turns a rough idea into a set of drawings your local authority will approve and your builder can actually work from.",
      "Because we build as well as design, our drawings stay grounded in what’s actually buildable and what it’ll actually cost. You won’t get a beautiful scheme that falls apart the moment it meets a real budget or a party wall.",
    ],
    offerings: [
      "Measured building surveys and existing-condition drawings",
      "Concept design and feasibility studies",
      "Full planning application drawings and submission",
      "Permitted development certificates (Lawful Development)",
      "Building regulations packages and structural calculations",
      "Party wall advice and awards",
      "Listed building and conservation area applications",
      "3D visualisations so you can see it before you commit",
    ],
    process: [
      {
        title: "Survey and brief",
        body: "We measure the property accurately and sit down with you to understand the brief: how you want to live in the space, what the budget is, and where you’re willing to compromise.",
      },
      {
        title: "Design and consultation",
        body: "You get concept drawings to react to. We revise them with you, and where it helps we make informal contact with the planning department before we submit anything.",
      },
      {
        title: "Submission and approval",
        body: "We prepare and submit the application, handle planning officer queries on your behalf, and then produce the technical drawings your build needs.",
      },
    ],
    faqs: [
      {
        q: "Do I have to use you for the build as well?",
        a: "No. Plenty of clients come to us for drawings alone and take them to another builder, and that’s completely fine. The drawings are yours.",
      },
      {
        q: "How long does planning permission take?",
        a: "A householder application is usually determined within eight weeks of validation, though the drawing and preparation stage before that typically takes three to four weeks.",
      },
      {
        q: "What if planning is refused?",
        a: "We talk through the officer's reasons with you and advise whether an amended scheme, an appeal, or a different approach is the sensible next move.",
      },
    ],
  },
  {
    slug: "plumbing",
    title: "Plumbing & Heating",
    navLabel: "Plumbing & Heating",
    summary:
      "Bathrooms, boilers, full system installs, leaks and repairs, with pipework you won’t have to think about again.",
    metaDescription:
      "Plumbing and heating in Portsmouth, Fareham and Havant. Bathroom installations, boiler work, leaks and full system pipework from Welton Property.",
    intro: [
      "Plumbing is the part of a house nobody sees and everybody notices the moment it goes wrong. We install and repair domestic plumbing and heating across the Portsmouth area, from a dripping stop tap to a complete first and second-fix on a new extension.",
      "Because plumbing sits inside a bigger build so often, we’re used to working alongside other trades and sequencing pipework so it doesn’t have to come back out again later.",
    ],
    offerings: [
      "Complete bathroom, en-suite and wet room installation",
      "Boiler installation, replacement and servicing",
      "Full central heating systems and radiator upgrades",
      "First and second-fix pipework on extensions and renovations",
      "Leak detection and pipe repairs",
      "Outside taps, garden irrigation and utility plumbing",
      "Unvented cylinders and pressurised systems",
      "Kitchen appliance plumbing",
    ],
    process: [
      {
        title: "Diagnose properly",
        body: "For repairs we find the actual cause rather than patching the symptom, and we’ll tell you what we’ve found before we start charging for parts.",
      },
      {
        title: "Agree the work first",
        body: "For installations we talk through the labour, the materials and how long the water will be off before we start.",
      },
      {
        title: "Test and leave it clean",
        body: "Everything is pressure-tested and checked before we pack up, and the floor goes back down as we found it.",
      },
    ],
    faqs: [
      {
        q: "Are you Gas Safe registered?",
        a: "Gas appliance work is carried out by Gas Safe registered engineers. Ask us for the registration number when you book and we’ll send it over.",
      },
      {
        q: "How long does a new bathroom take?",
        a: "A typical full bathroom refit runs five to eight working days including tiling, depending on whether we’re moving the soil pipe or changing the layout.",
      },
      {
        q: "Do you handle emergencies?",
        a: "We prioritise existing clients and active jobs for urgent leaks. Call us and we’ll tell you whether we can get to you today or whether you need an emergency-only service.",
      },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    navLabel: "Electrical",
    summary:
      "Rewires, consumer units, EV chargers, lighting design and certification, all tested and signed off.",
    metaDescription:
      "Domestic electricians in Portsmouth and Hampshire. Rewires, consumer unit upgrades, EV chargers, lighting and EICR testing from Welton Property.",
    intro: [
      "Electrical work is the one trade where cutting corners genuinely puts people at risk, so we don’t. Every circuit we install is tested, certified and notified where the regulations require it.",
      "We cover everything from adding a socket to rewiring a whole house, and we’re regularly first-fixing extensions and renovations that our own building teams are putting up.",
    ],
    offerings: [
      "Full and partial house rewires",
      "Consumer unit and fuse board upgrades",
      "First and second-fix wiring for extensions and renovations",
      "Interior and exterior lighting design and installation",
      "EV charging point installation",
      "Additional sockets, spurs and dedicated circuits",
      "EICR periodic inspections and landlord certificates",
      "Fault finding and remedial work",
    ],
    process: [
      {
        title: "Inspect and scope",
        body: "We look at the existing installation before quoting, because what is behind the plaster changes the price far more than what is in front of it.",
      },
      {
        title: "Install to current regs",
        body: "Work is carried out to the current BS 7671 wiring regulations, with circuits labelled clearly so the next person can understand your board.",
      },
      {
        title: "Test and certify",
        body: "You get the certification you need for building control, your insurer or a future sale, and you get it on the day we finish.",
      },
    ],
    faqs: [
      {
        q: "Do you provide electrical certificates?",
        a: "Yes. Notifiable work is certified and, where required, notified to building control, and you receive the paperwork on completion.",
      },
      {
        q: "How disruptive is a full rewire?",
        a: "A rewire on an occupied three-bedroom house typically takes five to ten days and does involve lifting floors and chasing walls. We stage it room by room so you keep power where you need it.",
      },
      {
        q: "Can you install an EV charger?",
        a: "Yes, including the supply upgrade and earthing arrangements that a charge point installation often needs.",
      },
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping & Driveways",
    navLabel: "Landscaping & Driveways",
    summary:
      "Block paving, patios, decking, sleeper walls, fencing and full garden transformations built on foundations that last.",
    metaDescription:
      "Landscaping and driveways in Portsmouth, Havant and Hayling Island. Block paving, patios, decking, sleeper walls and full garden builds by Welton Property.",
    intro: [
      "Most driveways and patios fail for the same reason: the bit you can’t see wasn’t done properly. We excavate to the right depth, lay a proper sub-base, and get the falls and drainage right before a single block goes down.",
      "It is the least glamorous part of the job and the reason our paving is still flat and weed-free years later. From a small patio to a complete garden redesign with retaining walls and levels, we build outside spaces to the same standard as the house.",
    ],
    offerings: [
      "Block paving driveways and permeable paving",
      "Patios in porcelain, sandstone and natural stone",
      "Timber decking and raised platforms",
      "Railway sleeper retaining walls and raised beds",
      "Fencing, gates and screening",
      "Turfing, artificial grass and planting",
      "Drainage, soakaways and Aco channels",
      "Full garden clearance, levelling and redesign",
    ],
    process: [
      {
        title: "Design and levels",
        body: "We survey the levels and talk through materials, drainage and how you actually want to use the space before quoting.",
      },
      {
        title: "Excavate and sub-base",
        body: "Dig out to the correct depth, install and compact a proper MOT sub-base, and set the falls so water runs where it should.",
      },
      {
        title: "Lay and finish",
        body: "Blocks, slabs or timber laid to line and level, edges haunched, joints filled, and every scrap of spoil taken away.",
      },
    ],
    faqs: [
      {
        q: "Do I need planning permission for a driveway?",
        a: "Not if the surface is permeable or you direct runoff to a soakaway or border rather than the road. We build to meet that requirement as standard.",
      },
      {
        q: "How long does a driveway take?",
        a: "A typical domestic block paving driveway takes one to two weeks depending on size, access and how much excavation and drainage is involved.",
      },
      {
        q: "Will my paving sink or grow weeds?",
        a: "Not if the sub-base is right. Sinking and weeds are symptoms of a shallow dig and poor jointing, which is exactly the part of the job we don’t rush.",
      },
    ],
  },
  {
    slug: "plastering-rendering",
    title: "Plastering & Rendering",
    navLabel: "Plastering & Rendering",
    summary:
      "Flat, ready-to-decorate walls and ceilings inside, and weatherproof silicone or K Rend finishes outside.",
    metaDescription:
      "Plastering and rendering in Portsmouth and across Hampshire. Skimming, dot and dab, silicone render and K Rend external finishes by Welton Property.",
    intro: [
      "Plastering is the finish everyone judges the whole job by. A wall that’s flat, square and properly polished makes an ordinary room look considered.",
      "We skim, board, float and render across the south coast. Interior ceilings and walls, plus external render systems that keep the weather out of solid-wall properties near the sea.",
    ],
    offerings: [
      "Skimming over existing plaster and new plasterboard",
      "Dot and dab dry lining",
      "Plasterboarding and stud partition walls",
      "Ceiling replacement and Artex covering",
      "Float and set on new brick and blockwork",
      "Silicone and acrylic thin-coat render systems",
      "Traditional sand and cement render",
      "K Rend and through-coloured render finishes",
    ],
    process: [
      {
        title: "Prepare the substrate",
        body: "Old coverings off, loose material removed, backgrounds correctly primed. Most bad plastering is bad preparation.",
      },
      {
        title: "Board, float and skim",
        body: "Coats applied and polished at the right stage, with beads and angles set true so your skirting and architrave sit tight.",
      },
      {
        title: "Protect and clean up",
        body: "Floors sheeted, waste bagged and removed, and the room left ready for a decorator to walk into.",
      },
    ],
    faqs: [
      {
        q: "How long before I can paint new plaster?",
        a: "Allow around four to seven days for fresh plaster to dry fully, longer in winter. Start with a watered-down mist coat rather than going straight in with a full-strength emulsion.",
      },
      {
        q: "Can you cover Artex without removing it?",
        a: "Usually yes. We can bond and skim over textured ceilings, or overboard them where the texture is too heavy. Older Artex can contain asbestos, so we test before disturbing it.",
      },
      {
        q: "Is render suitable for a coastal property?",
        a: "Yes, and it’s often the right answer for exposed solid-wall homes. We specify breathable silicone systems that cope with salt-laden wind and driving rain.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    navLabel: "Project Management",
    summary:
      "One point of contact running trades, materials, budget and programme so you don’t have to chase anyone.",
    metaDescription:
      "Construction project management in Portsmouth and Hampshire. Welton Property coordinates trades, budget and programme so your build runs to plan.",
    intro: [
      "The hardest part of a renovation is rarely any individual trade. It’s the coordination: the plasterer arriving before the electrician has first-fixed, or the tiles landing three weeks late because nobody chased them.",
      "We take that on. You get one number to call, a programme that’s kept up to date, and a straight conversation the moment something threatens the date or the budget.",
    ],
    offerings: [
      "Full programme planning and sequencing of trades",
      "Budget management and cost reporting",
      "Materials procurement and delivery scheduling",
      "Building control and warranty liaison",
      "Site supervision and quality control",
      "Subcontractor vetting and coordination",
      "Snagging schedules and hand-over",
      "Regular written progress updates",
    ],
    process: [
      {
        title: "Plan the programme",
        body: "Every trade, delivery and inspection mapped onto a realistic calendar before work starts, with the critical path made obvious.",
      },
      {
        title: "Run the site",
        body: "We’re on site checking work as it happens rather than after it’s buried, so problems get dealt with while they’re still small.",
      },
      {
        title: "Report and hand over",
        body: "Regular updates on progress and spend, a full snagging list worked through, and all certification collated for you at the end.",
      },
    ],
    faqs: [
      {
        q: "Can you manage trades I have already appointed?",
        a: "Yes. If you’ve got a kitchen fitter or a specialist you want to keep, we’ll build them into the programme.",
      },
      {
        q: "How do you charge for project management?",
        a: "Either as a percentage of the build cost or a fixed fee, depending on the size and length of the project. We agree it in writing before we start.",
      },
      {
        q: "What happens if the project overruns?",
        a: "You hear about it from us early, with the reason and the options, while there is still time to do something about it.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceSlugs = services.map((s) => s.slug);
