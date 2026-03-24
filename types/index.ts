export interface University {
  name: string;
  abbreviation: string;
  slug: string;
  logoUrl: string;
  resourceCount: string;
}

export interface Resource {
  title: string;
  subject: string;
  university: string;
  semester: string;
  fileType: "pdf" | "pptx" | "video" | "text" | "image";
  rating: number;
  viewCount: string;
  href: string;
}

export interface Subject {
  name?: string;
  slug?: string;
  icon?: string;
  resourceCount?: string;
  href?: string;
  creditHours?: string;
  description?: string;
}

export interface ForumQuestion {
  title: string;
  category: string;
  timeAgo: string;
  replyCount: number;
  authorAvatar: string;
  authorName: string;
  href: string;
}

export interface Notice {
  university: string;
  department: string;
  title: string;
  publishedDate: string;
  borderColor: string;
  href: string;
}

export interface NavItem {
  href: string;
  icon: string;
  label: string;
}

export interface UniversityDetail {
  name: string;
  abbreviation: string;
  slug: string;
  logoUrl: string;
  streams: string;
  resources: string;
  contributors: string;
  badge?: string;
}

export interface Program {
  name: string;
  slug: string;
  abbreviation: string;
  description: string;
  icon: string;
  iconStyle?: "filled" | "outlined";
  iconColor: string;
  duration: string;
  resources: string;
  featured?: boolean;
  badge?: string;
}

export interface UniversityPageData {
  name: string;
  abbreviation: string;
  slug: string;
  logoUrl: string;
  established: string;
  description: string;
  programs: Program[];
}
export interface Semester {
  number: number;
  label: string;
  description?: string;
  moduleCount?: string;
  tags?: string[];
  variant?: "featured" | "wide" | "dark" | "default";
  icon?: string;
  subjects: Subject[];
}
export interface ProgramPageData {
  name: string;
  abbreviation: string;
  slug: string;
  universityName: string;
  universityAbbr: string;
  universitySlug: string;
  description: string;
  duration: string;
  totalSemesters: string;
  affiliation: string;
  bannerImageUrl: string;
  semesters: Semester[];
}

export interface ChapterResource {
  type: "notes" | "lab" | "video" | "cheatsheet";
  icon: string;
  iconColor: string;
  count: number;
  label: string;
}

export interface Chapter {
  number: number;
  title: string;
  description: string;
  resources: ChapterResource[];
}

export interface Book {
  title: string;
  author: string;
  badge?: string;
}

export interface RelatedSubject {
  name: string;
  slug: string;
}

export interface SubjectPageData {
  name: string;
  slug: string;
  icon: string;
  badge: string;
  semesterNumber: number;
  semesterLabel: string;
  programAbbr: string;
  programSlug: string;
  universityName: string;
  universityAbbr: string;
  universitySlug: string;
  chapters: Chapter[];
  books: Book[];
  relatedSubjects: RelatedSubject[];
  syllabusDescription: string;
}
export interface ResourceItem {
  title: string;
  slug: string;
  fileType: "pdf" | "doc" | "video" | "image" | "link";
  fileIcon: string;
  fileIconColor: string;
  fileIconBg: string;
  authorName: string;
  authorAvatar?: string;
  authorInitials?: string;
  date: string;
  rating: string;
  views: string;
  downloads: string;
  likes: number;
}

export interface RoadmapItem {
  title: string;
  completed: boolean;
}

export interface RelatedModule {
  number: string;
  title: string;
  subtitle: string;
  href: string;
  variant?: "next" | "reference";
}

export interface Contributor {
  name: string;
  avatarUrl: string;
  resourceCount: string;
}

export interface Comment {
  authorName: string;
  authorAvatar: string;
  timeAgo: string;
  content: string;
  likes: number;
}

export interface ChapterPageData {
  chapterNumber: number;
  chapterTitle: string;
  description: string;
  badge: string;
  subjectName: string;
  subjectSlug: string;
  subjectIcon: string;
  semesterNumber: number;
  semesterLabel: string;
  programAbbr: string;
  programSlug: string;
  universityAbbr: string;
  universitySlug: string;
  tabs: string[];
  resources: ResourceItem[];
  roadmap: RoadmapItem[];
  relatedModules: RelatedModule[];
  contributors: Contributor[];
  comments: Comment[];
  syllabusYear: string;
}
export interface RoadmapItem {
  title: string;
  completed: boolean;
}
export interface ForumCategory {
  name: string;
  slug: string;
  icon: string;
  postCount: string;
  active?: boolean;
}

export interface ForumPost {
  id: string;
  authorName: string;
  authorAvatar?: string;
  authorInitials?: string;
  authorRole: string;
  timeAgo: string;
  title: string;
  excerpt: string;
  commentCount: string;
  likeCount: string;
  badge?: string;
  badgeStyle?: "verified" | "announcement" | "social";
  variant?: "editorial" | "social";
}

export interface TrendingTopic {
  category: string;
  title: string;
  stat: string;
  href: string;
}

export interface ExpertContributor {
  name: string;
  avatarUrl: string;
  specialty: string;
}

export interface CommunityStats {
  activeScholars: string;
  discussionsToday: string;
}

export interface Confession {
  id: string;
  content: string;
  authorLabel: string;
  timeAgo: string;
  location?: string;
  badge?: string;
  likes: string;
  comments: string;
  reactions?: string;
  category?: string;
  variant: "featured" | "compact" | "simple" | "editorial";
  imageUrl?: string;
  hotTake?: boolean;
}
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  color: "primary" | "tertiary";
}

export interface TeamMember {
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
  avatarAlt: string;
}

export interface FeaturePoint {
  icon: string;
  title: string;
  description: string;
}
