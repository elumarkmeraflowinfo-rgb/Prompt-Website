
import React, { useState } from 'react';
import { WebsiteParams, WebsiteCategory } from '../types';
import { CATEGORIES, STYLES, INDUSTRY_FEATURES } from '../constants';
import PromptOutput from './PromptOutput';

const PromptArchitect: React.FC = () => {
  const [params, setParams] = useState<WebsiteParams>({
    name: '',
    category: 'Business',
    primaryGoal: 'leads',
    targetAudience: '',
    features: [],
    style: 'Modern',
    colorPreference: '',
    pages: '',
    socialLinks: ''
  });

  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const toggleFeature = (feature: string) => {
    setParams(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate complex logic building the prompt structure
    setTimeout(() => {
      const prompt = constructPrompt(params);
      setGeneratedPrompt(prompt);
      setIsGenerating(false);
    }, 1200);
  };

  const constructPrompt = (p: WebsiteParams) => {
    const featureList = p.features.length > 0 ? p.features.join(', ') : 'standard high-converting features';
    
    return `You are a Senior Product Designer, Full-Stack Architect, Conversion Copywriter, and No Code Systems Expert combined. Build a complete, professional, production-ready website for "${p.name}".

1. SYSTEM INSTRUCTION
Act as a Full-stack website builder, UI/UX designer, CMS architect, and SEO specialist.

2. WEBSITE OVERVIEW
- Website Name: ${p.name || 'Untitled Project'}
- Website Type: ${p.category}
- Primary Goal: ${p.primaryGoal}
- Target Audience: ${p.targetAudience || 'General Audience'}
- Brand Tone & Style: ${p.style}
- Colors: ${p.colorPreference || 'Professionally curated palette'}

3. FRONTEND REQUIREMENTS
Create a professional, mobile-first structure including:
- High-impact Hero section with a value-driven headline and CTA
- Trust indicators (badges, social proof, testimonials)
- Core Services/Features Grid: ${featureList}
- Benefits-focused content sections
- FAQ Section to handle objections
- Footer with navigation, social links: ${p.socialLinks || 'standard placeholders'}

4. REQUIRED PAGES
Include placeholder content for:
- Home
- About Us
- ${p.category === 'Restaurant' ? 'Menu' : 'Services'}
- ${p.features.includes('Blog') || p.features.includes('Posts') ? 'Blog & Individual Posts' : 'Knowledge Base'}
- Contact & Support
- Legal (Privacy Policy, Terms)
- ${p.pages || 'Specialized landing pages'}

5. ADMIN DASHBOARD & CMS (MANDATORY)
The system MUST include a fully functional Admin Panel:
- CMS to Create, Edit, Delete: Pages, Blog Posts, Services, and Testimonials.
- Global Design Controls: Theme switcher, font selection, and color palette management.
- SEO Module: Meta titles, descriptions, and URL slugs for every page.
- Media Library: Centrally managed assets.
- Form Entry Management: Storage for leads and bookings.

6. FORMS & BOOKINGS
- Fully integrated ${p.primaryGoal === 'bookings' ? 'Booking engine with calendar sync' : 'Inquiry & Contact forms'}
- Email notifications for both Admin and User.

7. DESIGN & UX
- Fully responsive across all devices (Mobile-first).
- Modern UI with smooth transitions and professional typography.
- Fast loading with optimized assets.

8. FINAL INSTRUCTION
Generate the complete website structure, UI, backend logic, and admin dashboard based on the above requirements. The result must be fully editable, professional, and production-ready.`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Input Section */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
          <span className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center mr-3 text-sm">1</span>
          Configure Project
        </h2>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Website Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. Apex Agency"
                value={params.name}
                onChange={(e) => setParams({...params, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Category</label>
              <select 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={params.category}
                onChange={(e) => setParams({...params, category: e.target.value as WebsiteCategory, features: []})}
              >
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Primary Goal</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['Leads', 'Bookings', 'Sales', 'Authority'].map(goal => (
                <button 
                  key={goal}
                  onClick={() => setParams({...params, primaryGoal: goal.toLowerCase()})}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    params.primaryGoal === goal.toLowerCase() 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Features (Select Industry Standards)</label>
            <div className="flex flex-wrap gap-2">
              {INDUSTRY_FEATURES[params.category].map(feature => (
                <button 
                  key={feature}
                  onClick={() => toggleFeature(feature)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    params.features.includes(feature)
                    ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300'
                    : 'bg-slate-800 border-slate-700 text-slate-500 hover:border-slate-600'
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Brand Style</label>
              <select 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={params.style}
                onChange={(e) => setParams({...params, style: e.target.value})}
              >
                {STYLES.map(style => <option key={style} value={style}>{style}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Target Audience</label>
              <input 
                type="text" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. SMB Owners in NYC"
                value={params.targetAudience}
                onChange={(e) => setParams({...params, targetAudience: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Social Links / Specific Pages</label>
            <textarea 
              rows={2}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. LinkedIn, Twitter, Instagram..."
              value={params.socialLinks}
              onChange={(e) => setParams({...params, socialLinks: e.target.value})}
            />
          </div>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center ${
              isGenerating ? 'bg-slate-700 cursor-not-allowed text-slate-400' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
            }`}
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Architecting Prompt...
              </>
            ) : 'Generate Master Prompt'}
          </button>
        </div>
      </section>

      {/* Output Section */}
      <section className="sticky top-24">
        <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
          <span className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center mr-3 text-sm">2</span>
          Master Prompt Output
        </h2>
        <PromptOutput content={generatedPrompt} />
      </section>
    </div>
  );
};

export default PromptArchitect;
