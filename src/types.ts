export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  category?: string;
  github?: string;
  codeberg?: string;
  gitlab?: string;
  demo?: string;
  image?: string;
  highlights?: string[];
  featured?: boolean;
}
