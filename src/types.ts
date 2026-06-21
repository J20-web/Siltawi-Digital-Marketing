export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: ServiceItem[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: "all" | "marketing" | "web" | "branding" | "content" | "seo";
  categoryLabel: string;
  description: string;
  image: string;
  client: string;
  results: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  linkedIn?: string;
  twitter?: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
