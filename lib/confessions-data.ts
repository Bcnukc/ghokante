// lib/confessions-data.ts
import type { Confession } from "@/types";

export const confessions: Confession[] = [
  {
    id: "1",
    content:
      "I've spent three years citing papers I've only read the abstracts of. The fear of being found out is the only thing driving my thesis completion at this point.",
    authorLabel: "Anonymous Scholarly",
    timeAgo: "2 hours ago",
    location: "Harvard Square",
    likes: "1.2k",
    comments: "48",
    variant: "featured",
  },
  {
    id: "2",
    content:
      "The library coffee is better than the degree I'm currently struggling through.",
    authorLabel: "Anonymous",
    timeAgo: "4 hours ago",
    badge: "Verified Student",
    likes: "243",
    comments: "12",
    variant: "compact",
  },
  {
    id: "3",
    content:
      "I accidentally emailed my professor a meme about the midterm instead of the midterm itself. He replied with an even better meme. I passed.",
    authorLabel: "Anonymous",
    timeAgo: "6 hours ago",
    category: "Science Hub",
    likes: "",
    comments: "",
    variant: "simple",
  },
  {
    id: "4",
    content:
      "The prestige of this university is held together by three specific vending machines and the sheer audacity of the architecture department.",
    authorLabel: "Anonymous",
    timeAgo: "8 hours ago",
    reactions: "842",
    hotTake: true,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuZ73i5CUA1pBD4XrLdrhilUeXCZiBkGZSlAi7NmFfj1E07rECQygBrPt-epywLYgDhUhNt71DhMlOoDxl4NbOvfC1urfFb2bariMR0x1jITyTFAdFnihJEbjaWSqu6cIpVrcOTeV4QGdW2assTTPe16CESqdI4WcgJIVVaFtavvVqyXPrzr4hHtVO1XUspPESebWJXPKxoiCPG91QFzOOGItcBy8XTxCoasx7bBLuv7aKg0R-0vlZ3sLAvi8Au09z1U-vx1M4SqV1",
    likes: "",
    comments: "",
    variant: "editorial",
  },
];
