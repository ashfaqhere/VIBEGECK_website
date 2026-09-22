/**
 * ====================================================================
 * VIBE GEC KOZHIKODE — CENTRALIZED ASSET & IMAGE CONFIGURATION
 * ====================================================================
 * 
 * HOW TO EDIT OR REPLACE IMAGES IN CODE (e.g. IN VS CODE):
 * --------------------------------------------------------------------
 * 1. USING LOCAL FILES:
 *    - Place your custom image files inside the `public/` folder at the root of the project:
 *        e.g., `public/my-logo.png`
 *        e.g., `public/hero-photo.jpg`
 *        e.g., `public/team/member1.jpg`
 * 
 *    - In this file (`src/config/images.ts`), update the respective property URL path:
 *        logo: "/my-logo.png",
 *        heroBanner: "/hero-photo.jpg",
 * 
 * 2. USING EXTERNAL WEB URLS:
 *    - Simply paste any direct HTTPS image link into the string fields below:
 *        logo: "https://your-domain.com/logo.svg",
 * --------------------------------------------------------------------
 */

export interface SiteImagesConfig {
  /** The main VIBE website logo */
  logo: string;
  
  /** Hero main feature banner photo */
  heroBanner: string;
  
  /** Event Gallery Photos */
  events: Array<{
    id: string;
    title: string;
    imageUrl: string;
  }>;
  
  /** Execom Member Photos */
  execom: Array<{
    id: string;
    name: string;
    avatar: string;
  }>;
  
  /** Community Articles Cover Photos */
  articles: Array<{
    id: string;
    title: string;
    image: string;
    authorAvatar: string;
  }>;
  
  /** Incubated Startup Banners */
  startups: Array<{
    id: string;
    name: string;
    bannerImage: string;
  }>;
}

export const DEFAULT_SITE_IMAGES: SiteImagesConfig = {
  // Main VIBE Logo (Place logo in public/ and use "/filename.ext" or use a web URL)
  logo: "/VIBE_logo/logo.jpeg",

  // Main Hero Banner Photo (Inspiring young student innovators collaborating in tech hub)
  heroBanner: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",

  // Event Gallery Photos
  events: [
    {
      id: "evt-6",
      title: "11th Startup Saturday",
      imageUrl: "/events-photo/startup%20saturday.png"
    },
    {
      id: "evt-1",
      title: "Global Innovation Summit 2026",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "evt-2",
      title: "Founder Pitch Night",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "evt-3",
      title: "48H Hackathon Arena",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "evt-4",
      title: "Women Entrepreneurship Fireside",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "evt-5",
      title: "Prototype Fabrication Workshop",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    }
  ],

  // Execom Member Photos
  execom: [
    {
      id: "subin-michael",
      name: "SUBIN MICHAEL",
      avatar: "/Execom/Subin.jpeg"
    },
    {
      id: "jessy-p",
      name: "JESSY P",
      avatar: "/Execom/Jessy.jpeg"
    },
    {
      id: "sebin-varghese",
      name: "SEBIN VARGHESE",
      avatar: "/Execom/Sebin.PNG"
    },
    {
      id: "muhammed-ameer-kt",
      name: "MUHAMMED AMEER K T",
      avatar: "/Execom/Ameer.jpeg"
    },
    {
      id: "joyal-baby",
      name: "JOYAL BABY",
      avatar: "/Execom/Joyal.png"
    },
    {
      id: "adheep-sivaprasad",
      name: "ADHEEP SIVAPRASAD",
      avatar: "/Execom/Adheep.png"
    },
    {
      id: "fathima-minha",
      name: "FATHIMA MINHA",
      avatar: "/Execom/Minha.png"
    },
    {
      id: "mohammed-ashfaq",
      name: "MOHAMMED ASHFAQ",
      avatar: "/Execom/Ashfaq.jpeg"
    },
    {
      id: "haadiya-harshad",
      name: "HAADIYA HARSHAD",
      avatar: "/Execom/Haadiya.jpeg"
    },
    {
      id: "fathima-abdul-kabeer",
      name: "FATHIMA ABDUL KABEER",
      avatar: "/Execom/Fathima.png"
    },
    {
      id: "vismay-ks",
      name: "VISMAY K S",
      avatar: "/Execom/Vismay.jpg.jpeg"
    },
    {
      id: "bhavya-rajeev",
      name: "BHAVYA RAJEEV",
      avatar: "/Execom/Bhavya.jpeg"
    }
  ],

  // Community Articles Cover Photos
  articles: [
    {
      id: "art-1",
      title: "From Dorm Room to Series A",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "art-2",
      title: "AI in Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "art-3",
      title: "Hackathon 2024 Recap",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  ],

  // Incubated Startup Banners
  startups: [
    {
      id: "s-1",
      name: "LogiFlow Express",
      bannerImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "s-2",
      name: "AeroAgri IoT",
      bannerImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "s-3",
      name: "MedPulse Diagnostic",
      bannerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    }
  ]
};

/**
 * ====================================================================
 * GOOGLE FORMS INTEGRATION LINKS
 * ====================================================================
 */
export const GOOGLE_FORM_LINKS = {
  membership: "https://docs.google.com/forms/d/1MoIbtNTvwJ4PUcrWJup9kfLSoSyNFDI570RvBQnQCRE/viewform",
  ideaSubmission: "https://docs.google.com/forms/d/e/1FAIpQLSev27-oQclZ6_DzW_lfJOdB-EWfF0Owp6OR-XJj1_fhufAXSQ/viewform?usp=header"
};
