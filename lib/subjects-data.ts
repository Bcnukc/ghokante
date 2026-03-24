// lib/subjects-data.ts
import type { SubjectPageData } from "@/types";

// Key format: "universitySlug/programSlug/semester-N/subjectSlug"
export const subjectsData: Record<string, SubjectPageData> = {
  "tu/bsc-csit/semester-1/c-programming": {
    name: "C Programming",
    slug: "c-programming",
    icon: "code",
    badge: "Core Subject",
    semesterNumber: 1,
    semesterLabel: "1st",
    programAbbr: "BSc CSIT",
    programSlug: "bsc-csit",
    universityName: "Tribhuvan University",
    universityAbbr: "TU",
    universitySlug: "tu",
    syllabusDescription:
      "Download the TU official curriculum PDF for BSc CSIT C Programming.",
    chapters: [
      {
        number: 1,
        title: "Introduction to Programming",
        description: "Problem solving techniques, algorithms, and flowcharts.",
        resources: [
          {
            type: "notes",
            icon: "description",
            iconColor: "text-primary",
            count: 4,
            label: "Notes",
          },
          {
            type: "lab",
            icon: "science",
            iconColor: "text-secondary",
            count: 2,
            label: "Lab",
          },
          {
            type: "video",
            icon: "movie",
            iconColor: "text-tertiary",
            count: 1,
            label: "Video",
          },
        ],
      },
      {
        number: 2,
        title: "Fundamentals of C",
        description: "Data types, variables, operators, and I/O functions.",
        resources: [
          {
            type: "notes",
            icon: "description",
            iconColor: "text-primary",
            count: 6,
            label: "Notes",
          },
          {
            type: "lab",
            icon: "science",
            iconColor: "text-secondary",
            count: 3,
            label: "Lab",
          },
          {
            type: "cheatsheet",
            icon: "assignment",
            iconColor: "text-tertiary",
            count: 1,
            label: "Cheat",
          },
        ],
      },
      {
        number: 3,
        title: "Control Statements",
        description:
          "Decisions (if-else, switch) and Loops (for, while, do-while).",
        resources: [
          {
            type: "notes",
            icon: "description",
            iconColor: "text-primary",
            count: 8,
            label: "Notes",
          },
          {
            type: "lab",
            icon: "science",
            iconColor: "text-secondary",
            count: 5,
            label: "Lab",
          },
          {
            type: "cheatsheet",
            icon: "assignment",
            iconColor: "text-tertiary",
            count: 1,
            label: "Cheat",
          },
        ],
      },
      {
        number: 4,
        title: "Functions",
        description:
          "Modular programming, user defined functions, and recursion.",
        resources: [
          {
            type: "notes",
            icon: "description",
            iconColor: "text-primary",
            count: 5,
            label: "Notes",
          },
          {
            type: "lab",
            icon: "science",
            iconColor: "text-secondary",
            count: 3,
            label: "Lab",
          },
          {
            type: "video",
            icon: "movie",
            iconColor: "text-tertiary",
            count: 2,
            label: "Video",
          },
        ],
      },
      {
        number: 5,
        title: "Arrays and Strings",
        description:
          "One-dimensional and multi-dimensional arrays, string handling functions.",
        resources: [
          {
            type: "notes",
            icon: "description",
            iconColor: "text-primary",
            count: 7,
            label: "Notes",
          },
          {
            type: "lab",
            icon: "science",
            iconColor: "text-secondary",
            count: 4,
            label: "Lab",
          },
          {
            type: "cheatsheet",
            icon: "assignment",
            iconColor: "text-tertiary",
            count: 2,
            label: "Cheat",
          },
        ],
      },
      {
        number: 6,
        title: "Pointers",
        description:
          "Pointer arithmetic, pointers with arrays, dynamic memory allocation.",
        resources: [
          {
            type: "notes",
            icon: "description",
            iconColor: "text-primary",
            count: 6,
            label: "Notes",
          },
          {
            type: "lab",
            icon: "science",
            iconColor: "text-secondary",
            count: 3,
            label: "Lab",
          },
          {
            type: "video",
            icon: "movie",
            iconColor: "text-tertiary",
            count: 1,
            label: "Video",
          },
        ],
      },
      {
        number: 7,
        title: "Structures and Unions",
        description:
          "User-defined data types, nested structures, and file handling.",
        resources: [
          {
            type: "notes",
            icon: "description",
            iconColor: "text-primary",
            count: 4,
            label: "Notes",
          },
          {
            type: "lab",
            icon: "science",
            iconColor: "text-secondary",
            count: 2,
            label: "Lab",
          },
          {
            type: "cheatsheet",
            icon: "assignment",
            iconColor: "text-tertiary",
            count: 1,
            label: "Cheat",
          },
        ],
      },
    ],
    books: [
      {
        title: "ANSI C",
        author: "E. Balagurusamy",
        badge: "Primary Text",
      },
      {
        title: "The C Programming Language",
        author: "Kernighan & Ritchie",
      },
      {
        title: "Let Us C",
        author: "Yashavant Kanetkar",
      },
    ],
    relatedSubjects: [
      { name: "Digital Logic", slug: "digital-logic" },
      { name: "Mathematics I", slug: "mathematics-i" },
      { name: "Physics", slug: "physics" },
      { name: "English I", slug: "english-i" },
    ],
  },
  "tu/bsc-csit/semester-1/digital-logic": {
    name: "Digital Logic",
    slug: "digital-logic",
    icon: "memory",
    badge: "Core Subject",
    semesterNumber: 1,
    semesterLabel: "1st",
    programAbbr: "BSc CSIT",
    programSlug: "bsc-csit",
    universityName: "Tribhuvan University",
    universityAbbr: "TU",
    universitySlug: "tu",
    syllabusDescription:
      "Download the TU official curriculum PDF for BSc CSIT Digital Logic.",
    chapters: [
      {
        number: 1,
        title: "Number Systems and Codes",
        description:
          "Binary, octal, hexadecimal conversions, BCD, Gray code, and error detection.",
        resources: [
          {
            type: "notes",
            icon: "description",
            iconColor: "text-primary",
            count: 5,
            label: "Notes",
          },
          {
            type: "lab",
            icon: "science",
            iconColor: "text-secondary",
            count: 2,
            label: "Lab",
          },
        ],
      },
      {
        number: 2,
        title: "Boolean Algebra and Logic Gates",
        description:
          "Boolean theorems, De Morgan's laws, SOP and POS forms, universal gates.",
        resources: [
          {
            type: "notes",
            icon: "description",
            iconColor: "text-primary",
            count: 6,
            label: "Notes",
          },
          {
            type: "lab",
            icon: "science",
            iconColor: "text-secondary",
            count: 3,
            label: "Lab",
          },
          {
            type: "cheatsheet",
            icon: "assignment",
            iconColor: "text-tertiary",
            count: 1,
            label: "Cheat",
          },
        ],
      },
    ],
    books: [
      {
        title: "Digital Logic and Computer Design",
        author: "M. Morris Mano",
        badge: "Primary Text",
      },
      { title: "Digital Electronics", author: "Floyd" },
    ],
    relatedSubjects: [
      { name: "C Programming", slug: "c-programming" },
      { name: "Mathematics I", slug: "mathematics-i" },
      { name: "Physics", slug: "physics" },
      { name: "English I", slug: "english-i" },
    ],
  },
};

export function getSubjectData(
  universitySlug: string,
  programSlug: string,
  semesterSlug: string,
  subjectSlug: string,
): SubjectPageData | undefined {
  const key = `${universitySlug}/${programSlug}/${semesterSlug}/${subjectSlug}`;
  return subjectsData[key];
}

export function getAllSubjectParams(): {
  slug: string;
  program: string;
  semester: string;
  subject: string;
}[] {
  const params: {
    slug: string;
    program: string;
    semester: string;
    subject: string;
  }[] = [];

  for (const key of Object.keys(subjectsData)) {
    const [uniSlug, progSlug, semSlug, subSlug] = key.split("/");
    params.push({
      slug: uniSlug,
      program: progSlug,
      semester: semSlug,
      subject: subSlug,
    });
  }
  return params;
}
