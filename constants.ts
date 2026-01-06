
import { WebsiteCategory } from './types';

export const CATEGORIES: WebsiteCategory[] = ['Business', 'Restaurant', 'SaaS', 'Doctor', 'Travel', 'Agency', 'Portfolio', 'Other'];

export const STYLES = ['Modern', 'Luxury', 'Dark', 'Minimal', 'Vibrant', 'Professional', 'Brutalism'];

export const INDUSTRY_FEATURES: Record<WebsiteCategory, string[]> = {
  'Business': ['Contact Forms', 'Services Grid', 'Client Testimonials', 'Newsletter', 'Team Bio'],
  'Restaurant': ['Menu Management', 'Online Reservations', 'Food Gallery', 'Location Map', 'Reviews'],
  'SaaS': ['Feature Matrix', 'Pricing Tables', 'User Portal', 'API Docs', 'Live Chat'],
  'Doctor': ['Appointment Booking', 'Patient Portal', 'Service Listings', 'Medical Team', 'Insurance Info'],
  'Travel': ['Destination Search', 'Package Booking', 'Itinerary Planner', 'Photo Gallery', 'Trip Reviews'],
  'Agency': ['Case Studies', 'Service Offerings', 'Project Inquiry Form', 'Meet the Team', 'Client Logos'],
  'Portfolio': ['Project Gallery', 'Skills Section', 'Resume Download', 'Client Logos', 'Blog'],
  'Other': ['Custom Form', 'General CMS', 'Dynamic Pages']
};
