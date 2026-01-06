
export type WebsiteCategory = 'Business' | 'Restaurant' | 'SaaS' | 'Doctor' | 'Travel' | 'Agency' | 'Portfolio' | 'Other';

export interface WebsiteParams {
  name: string;
  category: WebsiteCategory;
  primaryGoal: string;
  targetAudience: string;
  features: string[];
  style: string;
  colorPreference: string;
  pages: string;
  socialLinks: string;
}

export interface GeneratedPrompt {
  id: string;
  content: string;
  timestamp: number;
}
