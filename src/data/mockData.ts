import { CommunityArticle, EventImage, ExecomMember, FundingScheme, StartupProject, WingInfo } from '../types';

export const EXECOM_MEMBERS: ExecomMember[] = [
  {
    id: 'subin-michael',
    name: 'SUBIN MICHAEL',
    role: 'NODAL OFFICER',
    avatar: '/Execom/Subin.jpeg',
    email: 'subin.michael@geck.ac.in',
    linkedin: 'https://linkedin.com/in/subinmichael',
    bio: 'Faculty Mentor & Nodal Officer providing institutional leadership, strategic guidance, and government innovation policy alignment.',
    x: 12,
    y: 20
  },
  {
    id: 'jessy-p',
    name: 'JESSY P',
    role: 'NODAL OFFICER',
    avatar: '/Execom/Jessy.jpeg',
    email: 'jessy.p@geck.ac.in',
    linkedin: 'https://linkedin.com/in/jessyp',
    bio: 'Faculty Nodal Officer fostering campus research commercialization, academic integration, and student entrepreneurship programs.',
    x: 37,
    y: 20
  },
  {
    id: 'sebin-varghese',
    name: 'SEBIN VARGHESE',
    role: 'CHIEF EXECUTIVE OFFICER (STUDENT LEAD !)',
    branch: 'AEI',
    year: 'S7',
    avatar: '/Execom/Sebin.PNG',
    email: 'sebin.varghese@geck.ac.in',
    linkedin: 'https://linkedin.com/in/sebinvarghese',
    bio: 'Heading VIBE\'s executive vision, strategic partnerships, ecosystem expansion, and student founder empowerment.',
    x: 62,
    y: 20
  },
  {
    id: 'muhammed-ameer-kt',
    name: 'MHAMMED AMEER K T',
    role: 'STUDENT LEAD 2 / CHIEF FINANCE OFFICER',
    branch: 'ME',
    year: 'S5',
    avatar: '/Execom/Ameer.jpeg',
    email: 'ameer.kt@geck.ac.in',
    linkedin: 'https://linkedin.com/in/muhammedameer',
    bio: 'Managing financial planning, KSUM grant distributions, seed funding allocations, and audit compliance for campus startups.',
    x: 87,
    y: 20
  },
  {
    id: 'joyal-baby',
    name: 'JOYAL BABY',
    role: 'CHIEF OPERATING OFFICER',
    branch: 'AEI',
    year: 'S7',
    avatar: '/Execom/Joyal.png',
    email: 'joyal.baby@geck.ac.in',
    linkedin: 'https://linkedin.com/in/joyalbaby',
    bio: 'Overseeing daily operations, MakerSpace infrastructure, FabLab equipment, and seamless event logistics.',
    x: 12,
    y: 50
  },
  {
    id: 'adheep-sivaprasad',
    name: 'ADHEEP SIVAPRASAD',
    role: 'CHIEF MARKETING OFFICER',
    branch: 'ME',
    year: 'S3',
    avatar: '/Execom/Adheep.png',
    email: 'adheep.sivaprasad@geck.ac.in',
    linkedin: 'https://linkedin.com/in/adheepsivaprasad',
    bio: 'Leading brand positioning, promotional campaigns, founder spotlights, and external outreach for VIBE GEC Kozhikode.',
    x: 37,
    y: 50
  },
  {
    id: 'fathima-minha',
    name: 'FATHIMA MINHA',
    role: 'CHIEF COMMUNITY OFFICER',
    branch: 'ME',
    year: 'S3',
    avatar: '/Execom/Minha.png',
    email: 'fathima.minha@geck.ac.in',
    linkedin: 'https://linkedin.com/in/fathimaminha',
    bio: 'Nurturing an inclusive student innovator network, organizing orientation cohorts, and strengthening peer collaboration.',
    x: 62,
    y: 50
  },
  {
    id: 'mohammed-ashfaq',
    name: 'ASHFAQ',
    role: 'CHIEF TECHNICAL OFFICER',
    branch: 'CSD',
    year: 'S3',
    avatar: '/Execom/Ashfaq.jpeg',
    email: 'ashfaqpkr@gmail.com',
    linkedin: 'https://linkedin.com/in/mohammedashfaq',
    bio: 'Directing technical architecture, digital platforms, hackathon engineering, and software/hardware development labs.',
    x: 87,
    y: 50
  },
  {
    id: 'haadiya-harshad',
    name: 'HADIYA HARSHAD',
    role: 'IPR & RESEARCH',
    branch: 'Civil',
    year: 'S7',
    avatar: '/Execom/Haadiya.jpeg',
    email: 'haadiya.harshad@geck.ac.in',
    linkedin: 'https://linkedin.com/in/haadiyaharshad',
    bio: 'Facilitating intellectual property searches, patent application guidance, research commercialization, and copyright support.',
    x: 12,
    y: 80
  },
  {
    id: 'fathima-abdul-kabeer',
    name: 'FATHIMA ABDUL KABEER',
    role: 'WOMEN\'S REPRESENTATIVE',
    branch: 'ME',
    year: 'S3',
    avatar: '/Execom/Fathima.png',
    email: 'fathima.kabeer@geck.ac.in',
    linkedin: 'https://linkedin.com/in/fathimaabdulkabeer',
    bio: 'Championing women entrepreneurs, organizing Women Techmakers cohorts, female founder bootcamps, and gender diversity initiatives.',
    x: 37,
    y: 80
  },
  {
    id: 'vismay-ks',
    name: 'VISMAY K S',
    role: 'CHIEF CREATIVE OFFICER',
    branch: 'CE',
    year: 'S7',
    avatar: '/Execom/Vismay.jpg.jpeg',
    email: 'vismay.ks@geck.ac.in',
    linkedin: 'https://linkedin.com/in/vismayks',
    bio: 'Directing visual brand language, creative media production, UI/UX aesthetics, and design across all ecosystem touchpoints.',
    x: 62,
    y: 80
  },
  {
    id: 'bhavya-rajeev',
    name: 'BHAVYA RAJEEV',
    role: 'DOCUMENTATION LEAD',
    avatar: '/Execom/Bhavya.jpeg',
    email: 'bhavya.rajeev@geck.ac.in',
    linkedin: 'https://linkedin.com/in/bhavyarajeev',
    bio: 'Managing official institutional archives, KTU Activity Points credit documentation, annual reports, and KSUM compliance.',
    x: 87,
    y: 80
  }
];

export const EVENT_IMAGES: EventImage[] = [
  {
    id: 'evt-6',
    title: '11th Startup Saturday',
    date: 'Aug 22, 2026',
    category: 'Startup Event',
    imageUrl: '/events-photo/startup%20saturday.png',
    description: 'A community gathering for student founders, aspiring entrepreneurs, and startup enthusiasts.'
  },
  {
    id: 'evt-1',
    title: 'Global Innovation Summit 2026',
    date: 'Aug 2026',
    category: 'Keynote & Awards',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    description: 'Celebrating student innovation awards with industry leaders and venture capitalists at the Annual Summit.'
  },
  {
    id: 'evt-2',
    title: 'Founder Pitch Night',
    date: 'Jul 2026',
    category: 'Demo Day',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    description: 'Ten student founders pitched live to seed investors and angel mentors for pre-seed grants.'
  },
  {
    id: 'evt-3',
    title: '48H Hackathon Arena',
    date: 'Jun 2026',
    category: 'Hackathon',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    description: 'Over 200 developers, designers, and thinkers built prototype products overnight at the Maker Space.'
  },
  {
    id: 'evt-4',
    title: 'Women Entrepreneurship Fireside',
    date: 'May 2026',
    category: 'Panel Discussion',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    description: 'Inspiring keynote with female tech founders sharing lessons on building scalable ventures.'
  },
  {
    id: 'evt-5',
    title: 'Prototype Fabrication Workshop',
    date: 'Apr 2024',
    category: 'Hands-on Lab',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    description: 'Hands-on 3D printing, circuit design, and rapid hardware prototyping masterclass.'
  }
];

export const ARTICLES: CommunityArticle[] = [
  {
    id: 'art-1',
    title: 'From Dorm Room to Series A: The Journey',
    category: 'STARTUP STORY',
    excerpt: 'How a group of final year students built a platform that revolutionized local logistics in just under two years.',
    content: `Building a venture inside a university campus presents a unique set of challenges and superpower advantages. When four final-year engineering students at GEC Kozhikode set out to solve hyper-local delivery friction, they didn't start with institutional capital—they started with a whiteboard in the IEDC Maker Space.

### The Spark
In early 2023, the team noticed that regional micro-merchants faced prohibitive costs when attempting to digitize inventory. By leveraging open logistics APIs and real-time route optimization algorithms, they launched a lightweight pilot right on campus.

### Validation at VIBE
With guidance from VIBE faculty advisors and $5,000 in seed grant funding from KSUM, the team refined their technology stack. They conducted over 1,200 test deliveries across Kozhikode within four months.

### Scaling to Series A
Last month, after crossing 100,000 monthly active transactions and expanding to three tier-2 cities, the startup closed its $1.8M Series A round led by regional seed funds.

> "The mentorship and 24/7 access to prototyping labs at VIBE gave us the confidence to build real hardware-software integration before we even sat for campus placements." — Founder`,
    author: {
      name: 'Ananya Ramesh',
      role: 'Student Journalist & Alum',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
    },
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    likes: 142,
    commentsCount: 18
  },
  {
    id: 'art-2',
    title: 'AI in Healthcare: Next Big Opportunity',
    category: 'TECH TRENDS',
    excerpt: 'Exploring the untapped potential of predictive models in primary care diagnostics and patient management.',
    content: `Artificial intelligence is rapidly shifting from generative text tools to clinical decision support systems. At GEC Kozhikode, student researchers are applying lightweight machine learning models to solve diagnostic latency in rural primary health centers.

### The Problem Space
In rural health setups, diagnostic delay for cardiovascular and optical screening often exceeds 72 hours due to specialist shortages. 

### Localized Model Optimization
By training quantized neural nets on anonymized optical topography scans, student teams under VIBE's AI Wing achieved 94.2% sensitivity for early diabetic retinopathy detection.

### Regulatory & Ethics Frameworks
Deploying AI in healthcare demands strict adherence to HIPAA, local data privacy norms, and algorithmic auditability. Our upcoming workshop on Oct 25 will dive deep into compliant ML deployment for medtech founders.`,
    author: {
      name: 'Dr. Rahul Varma',
      role: 'AI Wing Faculty Mentor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
    },
    date: 'Oct 08, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    likes: 98,
    commentsCount: 12
  },
  {
    id: 'art-3',
    title: 'Hackathon 2024: Ideas that Stood Out',
    category: 'EVENT RECAP',
    excerpt: 'A look back at the most innovative solutions presented during our 48-hour annual coding marathon.',
    content: `The air in the Main Auditorium was electric as 45 teams submitted their final builds at 9:00 AM on Sunday. From smart grid telemetry systems to AI sign-language interpreters, Hackathon 2024 showcased the pinnacle of student engineering.

### Winner: EcoGrid Telemetry
A low-cost IoT sensor node that monitors industrial transformer health in real-time, predicting grid overloads before hardware failure occurs.

### Runner Up: SignFlow AI
An edge-computed mobile app translating Malayalam sign language to clear audio synthesized speech with under 120ms latency.

### Special Mention: AquaSense
A bio-compatible water quality sensor designed for shrimp aquaculture farms across coastal Kerala.`,
    author: {
      name: 'Anna Smith',
      role: 'Execom Events Lead',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
    },
    date: 'Oct 01, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    likes: 215,
    commentsCount: 29
  }
];

export const WINGS: WingInfo[] = [
  {
    id: 'tech-wing',
    name: 'Technical & R&D Wing',
    iconName: 'Cpu',
    tagline: 'Translating cutting-edge research into market-ready software and hardware.',
    description: 'Provides technical architecture reviews, cloud hosting credits, high-performance GPU workstations, and codebase audits.',
    lead: 'Ashfaq (CTO)',
    initiatives: ['Cloud Credit Grants ($10k)', 'AI Model Fine-tuning Lab', 'Open Source Accelerator'],
    membersCount: 120,
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'incubation-wing',
    name: 'Startup Incubation & Pre-Seed',
    iconName: 'Rocket',
    tagline: 'Nurturing student founders from napkins to seed funding and incorporation.',
    description: 'Dedicated co-working office spaces, legal registration support, GST compliance, and direct pitch sessions with angel syndicates.',
    lead: 'Sebin Varghese (CEO)',
    initiatives: ['Pre-Seed Grant Program', 'Legal & Tax Clinic', 'Investor Demo Days'],
    membersCount: 85,
    gradient: 'from-violet-600 to-purple-800'
  },
  {
    id: 'creative-wing',
    name: 'Design & Brand Studio',
    iconName: 'Palette',
    tagline: 'Crafting world-class visual identities, pitch decks, and user interfaces.',
    description: 'Design feedback clinics, UI design systems guidance, product photography gear, and promotional video production facilities.',
    lead: 'Vismay K S (CCO)',
    initiatives: ['Pitch Deck Makeover Sessions', 'UI/UX Design Sprints', 'Brand Identity Toolkits'],
    membersCount: 64,
    gradient: 'from-fuchsia-600 to-pink-600'
  },
  {
    id: 'ipr-wing',
    name: 'IPR & Patent Cell',
    iconName: 'ShieldCheck',
    tagline: 'Protecting student innovations through patent filings and technology transfer.',
    description: 'Facilitates prior art search, attorney consultations, government patent fee reimbursement, and university spin-off structuring.',
    lead: 'Hadiya Harshad (IPR & Research)',
    initiatives: ['Patent Reimbursement Scheme', 'Prior-Art Search Workshops', 'Tech Transfer Desk'],
    membersCount: 42,
    gradient: 'from-purple-700 to-blue-600'
  }
];

export const FUNDING_SCHEMES: FundingScheme[] = [
  {
    id: 'f-1',
    name: 'IEDC Student Innovation Grant',
    provider: 'GEC Kozhikode & Kerala Startup Mission',
    maxAmount: '₹2,00,000',
    grantType: 'Equity-free',
    eligibility: ['Enrolled GEC Kozhikode student', 'Functional prototype or proof-of-concept', 'Minimum 2 team members'],
    description: 'Direct grant for purchasing hardware components, cloud servers, and testing equipment for early-stage prototypes.',
    deadline: 'Rolling Basis (Monthly Cycle)',
    status: 'Open'
  },
  {
    id: 'f-2',
    name: 'YIP (Young Innovators Programme)',
    provider: 'K-DISC, Govt of Kerala',
    maxAmount: '₹10,00,000',
    grantType: 'Grant',
    eligibility: ['Student research projects', 'Faculty mentor endorsement', 'Solves regional or societal problems'],
    description: 'Multi-stage grant scheme with incubation mentorship and state-level recognition.',
    deadline: 'Nov 15, 2024',
    status: 'Open'
  },
  {
    id: 'f-3',
    name: 'NIDHI-PRAYAS Hardware Grant',
    provider: 'DST, Govt of India',
    maxAmount: '₹10,00,000',
    grantType: 'Equity-free',
    eligibility: ['Physical/Hardware product prototype', 'Incorporated or pre-incorporation student startup'],
    description: 'Substantial grant dedicated to fabrication, CNC machining, PCB prototyping, and industrial design testing.',
    deadline: 'Dec 01, 2024',
    status: 'Upcoming'
  },
  {
    id: 'f-4',
    name: 'KSUM Seed Loan Scheme',
    provider: 'Kerala Startup Mission',
    maxAmount: '₹15,00,000',
    grantType: 'Soft Loan',
    eligibility: ['KSUM registered entity', 'DPIIT recognized', 'GEC Kozhikode incubation badge'],
    description: 'Concessional low-interest soft seed capital loan for scaling early commercial operations.',
    deadline: 'Rolling Basis',
    status: 'Rolling'
  }
];

export const STARTUPS: StartupProject[] = [
  {
    id: 's-1',
    name: 'LogiFlow Express',
    tagline: 'AI-powered micro-fulfillment & hyper-local route optimization for Tier-2 markets.',
    category: 'AI & SaaS',
    stage: 'Pre-Seed',
    logo: '⚡',
    bannerImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'LogiFlow enables local merchants to offer same-hour delivery by connecting spare transport capacity with automated dispatch models.',
    founders: ['Alex Johnson', 'Rohan Nair'],
    fundingRaised: '₹18,00,000 (Grant + Seed)',
    websiteUrl: 'https://logiflow.example.com'
  },
  {
    id: 's-2',
    name: 'AeroAgri IoT',
    tagline: 'Autonomous drone imaging & multi-spectral soil analytics for spice plantations.',
    category: 'AgriTech',
    stage: 'Incubated',
    logo: '🌾',
    bannerImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800',
    description: 'Precision agriculture drones equipped with custom multispectral cameras to detect nutrient deficiencies 14 days earlier.',
    founders: ['Divya K.', 'Siddharth V.'],
    fundingRaised: '₹10,00,000 (YIP Grant)',
    websiteUrl: 'https://aeroagri.example.com'
  },
  {
    id: 's-3',
    name: 'MedPulse Diagnostic',
    tagline: 'Point-of-care microfluidic cardiac marker detection device.',
    category: 'MedTech',
    stage: 'Prototype',
    logo: '🩺',
    bannerImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    description: 'Handheld diagnostic device delivering troponin test results in under 5 minutes at emergency response sites.',
    founders: ['Sarah Chen', 'Dr. Mahesh K.'],
    fundingRaised: '₹8,00,000 (IEDC Grant)',
    websiteUrl: 'https://medpulse.example.com'
  }
];
