export const docsPageRoutes = [
  { id: "introduction", label: "Introduction", href: "/docs/introduction" },
  { id: "installation", label: "Installation", href: "/docs/installation" },
  { id: "components", label: "Components", href: "/docs/components" },
  { id: "figma-files", label: "Figma Files", href: "/docs/figma-files" },
];

export const gettingStartedRoutes = docsPageRoutes.filter((route) =>
  ["introduction", "installation"].includes(route.id),
);
