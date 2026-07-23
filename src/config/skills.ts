export const stackGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Context API",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "WebSockets",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Enzyme", "TDD"],
  },
  {
    title: "Tooling",
    items: ["Git", "Webpack", "Vite", "SonarQube", "Postman", "ESLint"],
  },
];

export const allSkills = stackGroups.flatMap((group) => group.items);
