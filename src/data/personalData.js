import { Github, Linkedin, Mail } from 'lucide-react';

export const NAME = "Parvez Ali Ahmed";

export const DESCRIPTION =
  "Full Stack Developer passionate about creating scalable, high-performance web applications that drive business success and deliver exceptional user experiences.";

export const SOCIAL_LINKS = [
  {
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/parvez-ali-ahmed-shaik-9160651bb/",
    colorHover: "hover:text-blue-400",
  },
  {
    icon: Github,
    href: "https://github.com/parvez-ali-ahmed",
    colorHover: "hover:text-white",
  },
  {
    icon: Mail,
    href: "mailto:parvezaliahmedshaik@gmail.com",
    colorHover: "hover:text-blue-400",
  },
];

export const QUICK_LINKS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const CONTACT_INFO = {
  email: "parvezaliahmedshaik@gmail.com",
  phone: "+1 (913) 295-5829",
  location: "St. Louis, MO",
};

export const PROFILE_IMAGE_URL = "/ali-profile.jpeg";

export const LINKEDIN_URL = "https://www.linkedin.com/in/parvez-ali-ahmed-shaik-9160651bb/";
export const GITHUB_URL   = "https://github.com/parvez-ali-ahmed";
export const MAIL_URL     = "mailto:parvezaliahmedshaik@gmail.com";
export const RESUME_URL   =
  "https://drive.google.com/file/d/1UbsbZG3Ln3l5Xmfa43v0-MsLAxG_V7vb/view?usp=sharing";

export const HIGHLIGHTS = [
  "4+ years in full-stack development with Java and modern frameworks",
  "AWS Lambda & CI/CD automation expertise",
  "React & TypeScript UI development specialist",
  "Microservices architecture and performance optimization",
];
