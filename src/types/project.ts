export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  summary: string;
  description: string;
  challenge?: string;
  features: string[];
  results?: string;
  tags: string[];
  gallery: {
    src: string;
    alt: string;
  }[];
}