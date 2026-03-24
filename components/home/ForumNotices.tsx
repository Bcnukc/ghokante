// components/home/ForumNotices.tsx
import Link from "next/link";
import Image from "next/image";

interface ForumQuestion {
  title: string;
  category: string;
  timeAgo: string;
  replyCount: number;
  authorAvatar: string;
  authorName: string;
  href: string;
}

const forumQuestions: ForumQuestion[] = [
  {
    title: "How to prepare for TU CSIT entrance exam 2025?",
    category: "Entrance Prep",
    timeAgo: "2h ago",
    replyCount: 24,
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAycwmBO4i9fQ0J_gL-U2C4tb_3USTcLFO2-5RVeuC_qdboqV5UdylJ5rP2llaZvv1-ew1Hxt9CYx6Uc8FJRT6EKQLefa0bZpqMgHygmClVt2Dp1BdeypzrYd9KEtIjEgPVKML0EhHAdDszkBgl2HTDqKR14-I4bnZHayafZcAfg-HCUiDmmAlC9JRBbFys1cZNdZ5WO9-KzrmnR2dSgon_SasNyOdOyRFsso3MBrvLN4bcmIr0Kun8jiQzL_4wqW9C2VLIWszebocy",
    authorName: "Ramesh K.",
    href: "/forums",
  },
  {
    title: "Best resources for Data Structures and Algorithms?",
    category: "Academic",
    timeAgo: "5h ago",
    replyCount: 18,
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmI7ZXnkguw80gLP6W12nw-LzejHRTIpYapcWUjDhVQnWSgNcpHNk04NjhmR9Eqjoj0GJNkUo16n7gvVd3lHZCeTWsCKdvVbPrucIp5KYai8ZICt9LgI5z4R-h-hnJyNgvQTZX32PPErXmIYHCQBaidxaKXzJLJcBdrdHKC2k-7jq6Gr225Ncouzd8OMdZLu0FZ5TPNsdG2CCO3hefwKEDCKq7iLM69sWaI2aBIqI3Ipgz2paUCuJnBhhDC1ir_zfsfxQz7I3V32Bo",
    authorName: "Sita M.",
    href: "/forums",
  },
  {
    title: "KU vs TU for Computer Engineering - which is better?",
    category: "Discussion",
    timeAgo: "8h ago",
    replyCount: 42,
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDorliuodvGTyh9kDluJ5vmjjb9ktAiiOngtgv1u-TwUr34zZc25s0p7wEX94ujtANuH1cBM_kF3v-2WENFeA7TuT5MJm1a0a3Ww7dOjLpC6RAXkaIgimhUJ4LgZ5pC70BzUDR6hcOczL9vQMJjkjjAE3R6ZrKQOt60NF-NeTV6Gibm6wrKzg1ZtD-7-KnJffHFCLlM4UTettb1gvAh5tBu4yRzRFdnuRCSOa1AzezpSOCH2j6oqUVZHIReQdmCMUgIuXaJFDhIevRR",
    authorName: "Sujan T.",
    href: "/forums",
  },
  {
    title: "Tips for writing a research thesis in final year?",
    category: "Research",
    timeAgo: "1d ago",
    replyCount: 15,
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAycwmBO4i9fQ0J_gL-U2C4tb_3USTcLFO2-5RVeuC_qdboqV5UdylJ5rP2llaZvv1-ew1Hxt9CYx6Uc8FJRT6EKQLefa0bZpqMgHygmClVt2Dp1BdeypzrYd9KEtIjEgPVKML0EhHAdDszkBgl2HTDqKR14-I4bnZHayafZcAfg-HCUiDmmAlC9JRBbFys1cZNdZ5WO9-KzrmnR2dSgon_SasNyOdOyRFsso3MBrvLN4bcmIr0Kun8jiQzL_4wqW9C2VLIWszebocy",
    authorName: "Prakriti G.",
    href: "/forums",
  },
];

function ForumQuestionCard({
  title,
  category,
  timeAgo,
  replyCount,
  authorAvatar,
  authorName,
  href,
}: ForumQuestion) {
  return (
    <Link href={href} className="block group">
      <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-fixed/10 transition-colors">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={authorAvatar}
            alt={authorName}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-headline text-sm font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h4>
          <div className="flex items-center gap-3 mt-1.5">
            <span className="font-headline text-[10px] text-tertiary font-bold uppercase tracking-wider">
              {category}
            </span>
            <span className="font-headline text-[10px] text-outline">
              {timeAgo}
            </span>
            <span className="font-headline text-[10px] text-outline">
              {replyCount} replies
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ForumNotices() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Forum Questions */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-tertiary block mb-2">
                Community
              </span>
              <h2 className="font-headline text-3xl font-extrabold text-on-surface">
                Recent Discussions
              </h2>
            </div>
            <Link
              href="/forums"
              className="font-headline text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-container transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="space-y-2">
            {forumQuestions.map((question, index) => (
              <ForumQuestionCard key={index} {...question} />
            ))}
          </div>
        </div>

        {/* Notices / Announcements */}
        <div>
          <div className="mb-8">
            <span className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-tertiary block mb-2">
              Announcements
            </span>
            <h2 className="font-headline text-3xl font-extrabold text-on-surface">
              Latest Notices
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-tertiary text-lg">
                  campaign
                </span>
                <span className="font-headline text-[10px] font-bold uppercase tracking-widest text-tertiary">
                  Important
                </span>
              </div>
              <h4 className="font-headline font-bold text-on-surface mb-2">
                TU Exam Schedule 2025 Released
              </h4>
              <p className="font-body text-sm text-on-surface-variant">
                The examination controller office has published the updated
                schedule for all faculties. Check the details.
              </p>
              <span className="font-headline text-[10px] text-outline mt-3 block">
                2 days ago
              </span>
            </div>
            <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  info
                </span>
                <span className="font-headline text-[10px] font-bold uppercase tracking-widest text-primary">
                  Update
                </span>
              </div>
              <h4 className="font-headline font-bold text-on-surface mb-2">
                New Medical Archives Added
              </h4>
              <p className="font-body text-sm text-on-surface-variant">
                Over 200 new clinical case studies and journal references have
                been added to the medical archive.
              </p>
              <span className="font-headline text-[10px] text-outline mt-3 block">
                5 days ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
