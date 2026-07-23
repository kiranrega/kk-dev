export const siteConfig = {
  name: "Kiran Kumar Rega",
  role: "Full-Stack Software Engineer",
  description:
    "Portfolio of Kiran Kumar Rega, a React, TypeScript, Next.js, and Node.js software engineer focused on frontend performance and product quality.",
  url: "https://kiranrega.is-a.dev",
  ogImage: "/assets/Profile (2).webp",
  links: {
    email: "kirankumar.rega@gmail.com",
    github: "https://github.com/kiranrega",
    linkedin: "https://linkedin.com/in/kiranrega",
    twitter: "https://twitter.com/kiranrega",
    resume:
      process.env.NEXT_PUBLIC_RESUME_URL ||
      "https://drive.google.com/uc?export=download&id=1VEj5j4SiNtpHRgQyJi5TsgLyBczkfX45",
  },
  location: "Hyderabad, India",
  phone: "+91 85000 44241",
  website: "kiranrega.netlify.app",
  pronouns: "he/him",
};

export const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];
