export interface Link {
  url: string;
  text: string;
}

export const links: Link[] = [
  { url: "/", text: "Home" },
  { url: "/message", text: "Message Board" },
  { url: "/about", text: "About" },
  { url: "/authors", text: "Authors" },
];
