// components/home/ForumNotices.tsx
import Link from "next/link";
import ForumQuestionCard from "@/components/ui/ForumQuestionCard";
import NoticeCard from "@/components/ui/NoticeCard";
import type { ForumQuestion, Notice } from "@/types";

const forumQuestions: ForumQuestion[] = [
  {
    title: "How to solve TU 2079 Applied Mechanics Question 4?",
    category: "Engineering",
    timeAgo: "12 mins ago",
    replyCount: 24,
    authorAvatar: "/images/avatars/student-1.jpg",
    authorName: "Ram Sharma",
    href: "/forums/engineering/tu-2079-applied-mechanics-q4",
  },
  {
    title: "Anyone have the PoU syllabus for BBA 7th Sem?",
    category: "Management",
    timeAgo: "1 hour ago",
    replyCount: 5,
    authorAvatar: "/images/avatars/student-2.jpg",
    authorName: "Sita Thapa",
    href: "/forums/management/pou-bba-7th-sem-syllabus",
  },
  {
    title: "Best way to prepare for DSA viva in 2 days?",
    category: "CSIT",
    timeAgo: "3 hours ago",
    replyCount: 18,
    authorAvatar: "/images/avatars/student-3.jpg",
    authorName: "Hari Poudel",
    href: "/forums/csit/dsa-viva-preparation",
  },
];

const notices: Notice[] = [
  {
    university: "TU",
    department: "Examination Control",
    title: "B.E. First Year Second Part Routine Released",
    publishedDate: "Dec 12, 2023",
    borderColor: "border-secondary",
    href: "/notices/tu-be-first-year-routine",
  },
  {
    university: "PU",
    department: "Office of Controller",
    title: "Scholarship Application Form for Spring 2024",
    publishedDate: "Dec 10, 2023",
    borderColor: "border-blue-300",
    href: "/notices/pu-scholarship-spring-2024",
  },
  {
    university: "KU",
    department: "Registrar Office",
    title: "Winter Vacation Notice for School of Engineering",
    publishedDate: "Dec 08, 2023",
    borderColor: "border-amber-500",
    href: "/notices/ku-winter-vacation",
  },
];

export default function ForumNotices() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Forum — wider column */}
        <div className="lg:col-span-7">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold font-headline text-primary">
              Recent Discussions
            </h2>
            <Link href="/forums" className="text-sm font-bold text-secondary">
              Join Forum
            </Link>
          </div>
          <div className="space-y-4">
            {forumQuestions.map((question, index) => (
              <ForumQuestionCard key={index} {...question} />
            ))}
          </div>
        </div>

        {/* Notices — narrower column */}
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold font-headline text-primary mb-8">
            Latest Notices
          </h2>
          <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
            {notices.map((notice, index) => (
              <NoticeCard key={index} {...notice} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
