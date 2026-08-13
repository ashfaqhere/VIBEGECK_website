export type ScreenType = 
  | 'home'
  | 'about'
  | 'wings'
  | 'funding'
  | 'projects'
  | 'team'
  | 'article-detail'
  | 'submit-idea'
  | 'become-member';

export interface ExecomMember {
  id: string;
  name: string;
  role: string;
  department?: string;
  branch?: string;
  year?: string;
  avatar: string;
  linkedin?: string;
  email?: string;
  bio: string;
  x: number; // For interactive network position (%)
  y: number;
}

export interface CommunityArticle {
  id: string;
  title: string;
  category: 'STARTUP STORY' | 'TECH TRENDS' | 'EVENT RECAP' | 'ANNOUNCEMENT';
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  likes: number;
  commentsCount: number;
}

export interface EventImage {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface StartupProject {
  id: string;
  name: string;
  tagline: string;
  category: 'AgriTech' | 'MedTech' | 'AI & SaaS' | 'CleanTech' | 'Hardware';
  stage: 'Ideation' | 'Prototype' | 'Pre-Seed' | 'Incubated';
  logo: string;
  bannerImage: string;
  description: string;
  founders: string[];
  fundingRaised: string;
  websiteUrl?: string;
}

export interface FundingScheme {
  id: string;
  name: string;
  provider: string;
  maxAmount: string;
  grantType: 'Grant' | 'Equity-free' | 'Soft Loan' | 'Seed Capital';
  eligibility: string[];
  description: string;
  deadline: string;
  status: 'Open' | 'Upcoming' | 'Rolling';
}

export interface WingInfo {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  description: string;
  lead: string;
  initiatives: string[];
  membersCount: number;
  gradient: string;
}

export interface IdeaSubmission {
  id: string;
  title: string;
  problem: string;
  solution: string;
  category: string;
  teamMembers: string;
  contactEmail: string;
  status: 'Under Review' | 'Shortlisted' | 'Approved';
  submittedAt: string;
}

export interface MemberProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  branch: string;
  yearOfStudy: string;
  interests: string[];
  memberIdNumber: string;
  joinedDate: string;
}
