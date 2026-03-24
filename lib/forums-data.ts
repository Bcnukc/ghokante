// lib/forums-data.ts
import type {
  ForumCategory,
  ForumPost,
  TrendingTopic,
  ExpertContributor,
  CommunityStats,
} from "@/types";

export const forumCategories: ForumCategory[] = [
  {
    name: "Academic Research",
    slug: "academic-research",
    icon: "school",
    postCount: "2.4k",
    active: true,
  },
  {
    name: "General Campus",
    slug: "general-campus",
    icon: "campaign",
    postCount: "1.1k",
  },
  {
    name: "Student Wellness",
    slug: "student-wellness",
    icon: "psychology",
    postCount: "892",
  },
  {
    name: "Career Path",
    slug: "career-path",
    icon: "work",
    postCount: "543",
  },
];

export const forumPosts: ForumPost[] = [
  {
    id: "1",
    authorName: "Julian Vane",
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmHwYBKAnHCQfaMRMYI7EN7etSTackGnoLyPE5kmnNuhE7nZ46SzQPHG7g4qS70a0ew0VHCbPzreE2A9dyn4AZ3BJ0ZwdrK7W7Y3O2WycLmifRYZMstWb-i67sT6QKJw8CYGgNpvopss8o__4vNhpqoCXezpq2HddIHc2uVvWgBkgrbAfgeIgpjy0VwLupjC6RjEZYDeE4mynf7OCj2B28UJxwH3CZdiatXXcCMsWZLFfSgxxnKdEWEg7_Aaaj98Po0ZYWfUVMKGuN",
    authorRole: "Postgraduate Researcher",
    timeAgo: "2h ago",
    title:
      "The ethical implications of AI-assisted thesis drafting in humanities.",
    excerpt:
      "As we integrate LLMs into our research workflows, the boundary between original thought and algorithmic synthesis begins to blur...",
    commentCount: "124",
    likeCount: "452",
    badge: "Verified Content",
    badgeStyle: "verified",
    variant: "editorial",
  },
  {
    id: "2",
    authorName: "Elena Moretti",
    authorInitials: "EM",
    authorRole: "Faculty Mentor",
    timeAgo: "5h ago",
    title: "Resources for the 2024 International Law Symposium.",
    excerpt:
      "Following up on last week's session, I've compiled a list of archival resources available through the Ghokante Digital Atheneum...",
    commentCount: "89",
    likeCount: "210",
    badge: "Announcements",
    badgeStyle: "announcement",
    variant: "editorial",
  },
  {
    id: "3",
    authorName: "Anonymous",
    authorRole: "Student Social Circle",
    timeAgo: "10m ago",
    title: "Best quiet spots for overnight study sessions?",
    excerpt: "",
    commentCount: "34",
    likeCount: "",
    variant: "social",
  },
];

export const trendingTopics: TrendingTopic[] = [
  {
    category: "Confessions",
    title: 'The "Secret Library" password mystery...',
    stat: "452 people talking",
    href: "#",
  },
  {
    category: "Scholarships",
    title: "Merit awards for Fall 2024 intake",
    stat: "1.2k views",
    href: "#",
  },
  {
    category: "Clubs",
    title: "The Digital Archival Society Meetup",
    stat: "89 joining",
    href: "#",
  },
];

export const expertContributors: ExpertContributor[] = [
  {
    name: "Dr. Sarah Chen",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRuzjSxz1cTjAmNh5yXhEh_5rhsPz-k3cEKjXreVkHLAdqYwWYqyUnkRFXyXhvCPHbOmlVC_lzH3J4m9Gi6x0lM04ctjF3fjGD1rW3bR2U4Lw13Sr4_vQnatqlkjoyrXFPo8ZxFvtfrSwIKMwZr7AuvX2ZDEAkCsGdOwI0wEY1weBbLYiNBS3PVLM4XvWlfiB1q2T0YADuk0bP-Elk2ryRexafb2SaHQm_A5CiWDh468912_YEm0rq2jeILGZ1sy5p8wDFsd41DzwY",
    specialty: "Quantum Computing",
  },
  {
    name: "Prof. Marcus Thorne",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiXNQDFJq8G0BuTQrKuiWxUiON6sq02Jucq0o5_K9GUkCelm2X1gZFzYfGp0eGRafSsjfgExmSp0PsCdAqHV47cvOsyKTi7HaLZZZJxapFlTaLW6pjUbK3ZFOW9zumbIcTphcBLz4daKn_ZEpv0e1Nou4CjMQGGPwuEgj6WClLMUTpjjOfwLfaMDk5DFH_-lRxko76f78H3-vrxFoCuapXHaESn51CzwvdlwhAp3OyJgLGhO9onqRCVbXabnNrUwQVUllgo-Kqepof",
    specialty: "Classic Literature",
  },
];

export const communityStats: CommunityStats = {
  activeScholars: "42,801",
  discussionsToday: "156",
};
