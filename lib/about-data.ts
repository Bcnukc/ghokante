// lib/about-data.ts
import type { TimelineEvent, TeamMember, FeaturePoint } from "@/types";

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2022",
    title: "The First Archive",
    description:
      "Started as a small shared drive between engineering students in Lalitpur.",
    color: "primary",
  },
  {
    year: "2023",
    title: "Institutional Expansion",
    description:
      "Expanded to encompass Medical, Management, and Law faculties across three major universities.",
    color: "tertiary",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Anish Shrestha",
    role: "Founder & Lead Curator",
    quote:
      "Building the tool I wish I had during my second year at TU Engineering.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAycwmBO4i9fQ0J_gL-U2C4tb_3USTcLFO2-5RVeuC_qdboqV5UdylJ5rP2llaZvv1-ew1Hxt9CYx6Uc8FJRT6EKQLefa0bZpqMgHygmClVt2Dp1BdeypzrYd9KEtIjEgPVKML0EhHAdDszkBgl2HTDqKR14-I4bnZHayafZcAfg-HCUiDmmAlC9JRBbFys1cZNdZ5WO9-KzrmnR2dSgon_SasNyOdOyRFsso3MBrvLN4bcmIr0Kun8jiQzL_4wqW9C2VLIWszebocy",
    avatarAlt: "Anish Shrestha portrait",
  },
  {
    name: "Prakriti Gurung",
    role: "Medical Archive Lead",
    quote:
      "Democratizing access to high-yield medical journals and clinical cases.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmI7ZXnkguw80gLP6W12nw-LzejHRTIpYapcWUjDhVQnWSgNcpHNk04NjhmR9Eqjoj0GJNkUo16n7gvVd3lHZCeTWsCKdvVbPrucIp5KYai8ZICt9LgI5z4R-h-hnJyNgvQTZX32PPErXmIYHCQBaidxaKXzJLJcBdrdHKC2k-7jq6Gr225Ncouzd8OMdZLu0FZ5TPNsdG2CCO3hefwKEDCKq7iLM69sWaI2aBIqI3Ipgz2paUCuJnBhhDC1ir_zfsfxQz7I3V32Bo",
    avatarAlt: "Prakriti Gurung portrait",
  },
  {
    name: "Sujan Thapa",
    role: "Tech Infrastructure",
    quote:
      "Ensuring the platform remains fast, secure, and accessible on any device.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDorliuodvGTyh9kDluJ5vmjjb9ktAiiOngtgv1u-TwUr34zZc25s0p7wEX94ujtANuH1cBM_kF3v-2WENFeA7TuT5MJm1a0a3Ww7dOjLpC6RAXkaIgimhUJ4LgZ5pC70BzUDR6hcOczL9vQMJjkjjAE3R6ZrKQOt60NF-NeTV6Gibm6wrKzg1ZtD-7-KnJffHFCLlM4UTettb1gvAh5tBu4yRzRFdnuRCSOa1AzezpSOCH2j6oqUVZHIReQdmCMUgIuXaJFDhIevRR",
    avatarAlt: "Sujan Thapa portrait",
  },
];

export const featurePoints: FeaturePoint[] = [
  {
    icon: "check_circle",
    title: "Centralized Archive",
    description:
      "One singular source of truth for notes, theses, and journals.",
  },
  {
    icon: "check_circle",
    title: "Community Vetted",
    description:
      "Peer-reviewed resources to ensure the highest academic integrity.",
  },
];

export const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAcYRQdI1lUDGzwdRakYp5RbkVLzgYiUt4lXLJlUGmbD2pS1SqsHHZx4x6vopIeo22iOnIBZCxHsf2tYjai7aaFC1C3R4dApp5aKbbu4rr_FkZytuMN7WoQTEyPxB2sNMSqtlFsDjh8Wg-fvHPHUAqrANCMxqnzlUMRd3A5XbMLmLWu2g0hqFqsh9Hxm2ESBkN8R1WnyZ4-X8jslFMqVpfg7nx3qoON1TACpTv0oPCTN-g6wvpCNSdiv_mNXdDqPMD3TdfuzwNShHfI";
