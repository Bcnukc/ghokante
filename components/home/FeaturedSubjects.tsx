// components/home/FeaturedSubjects.tsx
import SectionHeader from "@/components/ui/SectionHeader";
import SubjectIcon from "@/components/ui/SubjectIcon";
import type { Subject } from "@/types";

const subjects: Subject[] = [
  {
    name: "C Programming",
    icon: "terminal",
    resourceCount: "1,200+",
    href: "/search?subject=c-programming",
  },
  {
    name: "DSA",
    icon: "account_tree",
    resourceCount: "850+",
    href: "/search?subject=dsa",
  },
  {
    name: "Java",
    icon: "coffee",
    resourceCount: "600+",
    href: "/search?subject=java",
  },
  {
    name: "Database",
    icon: "database",
    resourceCount: "1,100+",
    href: "/search?subject=dbms",
  },
];

export default function FeaturedSubjects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Master Your Subjects"
          subtitle="Explore targeted study materials for the most challenging courses across all engineering and management streams."
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {subjects.map((subject) => (
            <SubjectIcon key={subject.name} {...subject} />
          ))}
        </div>
      </div>
    </section>
  );
}
