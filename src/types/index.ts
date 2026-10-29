export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutcomes: string[];
  coachingRatio: string;
  duration: string;
  frequency: string;
  level: string;
  scheduleSample: { day: string; focus: string }[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  specialties: string[];
  image: string;
}

export interface FacilitySpotlight {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPriceMonthly: number;
  tagline: string;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
}

export interface TestimonialTemplate {
  id: string;
  archetype: string;
  quote: string;
  memberContext: string;
  focusArea: string;
  timeframe: string;
}
