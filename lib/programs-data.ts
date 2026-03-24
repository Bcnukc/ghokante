// lib/programs-data.ts
import type { ProgramPageData } from "@/types";

export const programsData: Record<string, Record<string, ProgramPageData>> = {
  tu: {
    "bsc-csit": {
      name: "BSc CSIT",
      abbreviation: "BSc CSIT",
      slug: "bsc-csit",
      universityName: "Tribhuvan University",
      universityAbbr: "TU",
      universitySlug: "tu",
      description:
        "Bachelor of Science in Computer Science and Information Technology. A comprehensive four-year curriculum designed to foster expertise in computational theory and practical IT applications.",
      duration: "4 Years",
      totalSemesters: "8 Semesters",
      affiliation: "TU Affiliated",
      bannerImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMV5xOp01VXK06NzNU9w4qd95CFMkcFwBIcUqz6aSS2yks58StYYO4vM-LFvbFmeb359Fjwq_ItGx0uPmw2WyD4jZBxM55u4kSBxPXBD7TzHiPYBuZGksZTRe3HtG_6MdVohQ5X8td5AKYqxXuBjxzxeB7xNIrzEBj0NlVZ2W0kecyMIQm4TDLVErKwsi4r1Nprn3BMh3RUDfKzrHs190gaG-0eWjQWpBhljJFJyqWRTzwk0XuEhG_PLJJ9uQuO8ZjR9gDP6FQIhci",
      semesters: [
        {
          number: 1,
          label: "1st",
          description:
            "Foundation year focusing on basic programming paradigms and discrete mathematics.",
          tags: ["5 Subjects", "Start Here"],
          variant: "featured",
          subjects: [
            {
              name: "C Programming",
              slug: "c-programming",
              icon: "code",
              creditHours: "3",
              resourceCount: "128",
              description:
                "Introduction to procedural programming, data types, control structures, and memory management.",
            },
            {
              name: "Digital Logic",
              slug: "digital-logic",
              icon: "memory",
              creditHours: "3",
              resourceCount: "84",
              description:
                "Binary systems, boolean algebra, logic gates, and the design of combinational and sequential circuits.",
            },
            {
              name: "Mathematics I",
              slug: "mathematics-i",
              icon: "functions",
              creditHours: "3",
              resourceCount: "96",
              description:
                "Calculus-based mathematical analysis including limits, continuity, and differential equations.",
            },
            {
              name: "Physics",
              slug: "physics",
              icon: "science",
              creditHours: "3",
              resourceCount: "72",
              description:
                "Mechanics, thermodynamics, waves, optics, and modern physics fundamentals.",
            },
            {
              name: "English I",
              slug: "english-i",
              icon: "translate",
              creditHours: "3",
              resourceCount: "45",
              description:
                "Academic writing, reading comprehension, and communication skills for technical contexts.",
            },
          ],
        },
        {
          number: 2,
          label: "2nd",
          moduleCount: "5",
          variant: "default",
          subjects: [
            {
              name: "Discrete Structures",
              slug: "discrete-structures",
              icon: "hub",
              creditHours: "3",
              resourceCount: "92",
              description:
                "Sets, relations, functions, graph theory, and combinatorics for computer science.",
            },
            {
              name: "Object Oriented Programming",
              slug: "oop",
              icon: "data_object",
              creditHours: "3",
              resourceCount: "115",
              description:
                "OOP concepts using C++ including classes, inheritance, polymorphism, and templates.",
            },
            {
              name: "Microprocessor",
              slug: "microprocessor",
              icon: "developer_board",
              creditHours: "3",
              resourceCount: "78",
              description:
                "Architecture and programming of 8085/8086 microprocessors, assembly language.",
            },
          ],
        },
        {
          number: 3,
          label: "3rd",
          moduleCount: "5",
          variant: "default",
          subjects: [
            {
              name: "Data Structures & Algorithms",
              slug: "dsa",
              icon: "account_tree",
              creditHours: "3",
              resourceCount: "156",
              description:
                "Arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching algorithms.",
            },
          ],
        },
        {
          number: 4,
          label: "4th",
          moduleCount: "5",
          variant: "default",
          subjects: [
            {
              name: "Database Management System",
              slug: "dbms",
              icon: "database",
              creditHours: "3",
              resourceCount: "134",
              description:
                "Relational model, SQL, normalization, transaction processing, and database design.",
            },
          ],
        },
        {
          number: 5,
          label: "5th",
          moduleCount: "5",
          variant: "default",
          subjects: [],
        },
        {
          number: 6,
          label: "6th",
          description: "Focus on Network & Security",
          variant: "wide",
          icon: "lan",
          subjects: [],
        },
        {
          number: 7,
          label: "7th",
          moduleCount: "Electives Focus",
          variant: "default",
          subjects: [],
        },
        {
          number: 8,
          label: "8th",
          description:
            "The final chapter. Dissertation and project-based learning.",
          variant: "dark",
          subjects: [],
        },
      ],
    },
  },
};

export function getProgramData(
  universitySlug: string,
  programSlug: string,
): ProgramPageData | undefined {
  return programsData[universitySlug]?.[programSlug];
}

export function getAllProgramParams(): { slug: string; program: string }[] {
  const params: { slug: string; program: string }[] = [];
  for (const [uniSlug, programs] of Object.entries(programsData)) {
    for (const progSlug of Object.keys(programs)) {
      params.push({ slug: uniSlug, program: progSlug });
    }
  }
  return params;
}
