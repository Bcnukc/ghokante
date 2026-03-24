// lib/chapters-data.ts
import type { ChapterPageData } from "@/types";

// Key: "uniSlug/programSlug/semester-N/subjectSlug/chapter-N"
export const chaptersData: Record<string, ChapterPageData> = {
  "tu/bsc-csit/semester-1/c-programming/chapter-1": {
    chapterNumber: 1,
    chapterTitle: "Introduction to C",
    description:
      "The foundation of procedural programming. Understanding history, structure, and the execution environment of the C language.",
    badge: "CSIT CORE SERIES",
    subjectName: "C Programming",
    subjectSlug: "c-programming",
    subjectIcon: "code",
    semesterNumber: 1,
    semesterLabel: "1st",
    programAbbr: "BSc CSIT",
    programSlug: "bsc-csit",
    universityAbbr: "TU",
    universitySlug: "tu",
    syllabusYear: "TU 2074 SYLLABUS",
    tabs: [
      "Notes",
      "Lab Questions",
      "One Day Cheatsheet",
      "Practical Exercises",
      "Reference Books",
      "Online Links",
      "Video Links",
      "Others",
    ],
    resources: [
      {
        title: "Comprehensive Introduction to C - Lecture Handouts",
        slug: "intro-to-c-lecture-handouts",
        fileType: "pdf",
        fileIcon: "picture_as_pdf",
        fileIconColor: "text-red-600",
        fileIconBg: "bg-red-100",
        authorName: "Prof. Rabin Sharma",
        authorAvatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB0CZO-KTyDZVrl99J0UHGU-gEebWVVtaFsYkrdZ3eT_-hFPcHKfnvHY6WnRuvBA0XpLVle6-KAeIvwe-EiYKbwqaunBtBMb9T5bXPAH8dxBDKxMxm3ubfgzd-aa5iSAzyk5c0HYvT9JJSgsY37GYmS1vIoMfNikufU-3BbyLcKYPOLI-YbRMA_r3pagnIVS_hia2LQ0AqRB5IlovMm_ZYh332KeCStZ_8vMeBKTfDxzLyaWGSRZQxCr3112DKmyysJ-7Uwju6gzOK5",
        date: "Oct 12, 2023",
        rating: "4.9",
        views: "1,240",
        downloads: "840",
        likes: 24,
      },
      {
        title: "C Flowcharts & Execution Flow Visualization",
        slug: "c-flowcharts-execution",
        fileType: "pdf",
        fileIcon: "picture_as_pdf",
        fileIconColor: "text-red-600",
        fileIconBg: "bg-red-100",
        authorName: "Ghokante Editorial",
        authorInitials: "GK",
        date: "Nov 05, 2023",
        rating: "4.7",
        views: "3.1k",
        downloads: "2.4k",
        likes: 156,
      },
      {
        title: "Problem Solving Techniques & Algorithm Design",
        slug: "problem-solving-algorithms",
        fileType: "pdf",
        fileIcon: "picture_as_pdf",
        fileIconColor: "text-red-600",
        fileIconBg: "bg-red-100",
        authorName: "Sita Devi Maharjan",
        authorInitials: "SM",
        date: "Sep 18, 2023",
        rating: "4.5",
        views: "890",
        downloads: "620",
        likes: 18,
      },
      {
        title: "History of C Language - Timeline & Key Milestones",
        slug: "history-of-c-timeline",
        fileType: "pdf",
        fileIcon: "picture_as_pdf",
        fileIconColor: "text-red-600",
        fileIconBg: "bg-red-100",
        authorName: "Ram Prasad",
        authorInitials: "RP",
        date: "Aug 22, 2023",
        rating: "4.3",
        views: "560",
        downloads: "340",
        likes: 9,
      },
    ],
    roadmap: [
      { title: "History and Importance of C", completed: true },
      { title: "Basic Structure of C Programs", completed: true },
      { title: "Programming Styles & Standards", completed: false },
      { title: "Compiling and Executing C", completed: false },
      { title: "Problem Solving with Flowcharts", completed: false },
    ],
    relatedModules: [
      {
        number: "02",
        title: "Constants, Variables & Data Types",
        subtitle: "Next Chapter",
        href: "chapter-2",
        variant: "next",
      },
      {
        number: "SYL",
        title: "C Programming Full Syllabus",
        subtitle: "Reference",
        href: "",
        variant: "reference",
      },
    ],
    contributors: [
      {
        name: "Bishal Ray",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAADRqe_qZfKx15oP1XHwvonyIOwL8ZtRgGsL_GViBMCJb8ckpJtZNt8RB_E6L3r87XZl8QNCxWtsx7zmRoWxewaiLgZ_fmMmZVw24s4rQXNefYHuGXZvjT9lLiPcWAR5S8hMpXomsxpJ_uqVi_5-m4GnrbCugICnrm2aUIGHrsfds9NWANzS9TAndJbIeFHNJDLaqnCjiFw090kiTxD7RSnjUeo01HLHSPxWSq5wuxOraXPb4X2O3ezWyd546EDrLudRTYscsdxBI7",
        resourceCount: "12",
      },
      {
        name: "Aayusha KC",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWOeQXv1uQqSfQl2TPyfMeBZpApLJY6k9lY_UzFJk9tpZtqvcORiR-ZnwDjMEl104nNAcrU9EvCQZTH83yW328-duYCL0NgJIOkBi6hcz8i3Y5bkho_4Ja3fcL2jI1CSDEv07irTx8OqTWTvQSwPcMgjNzN_e1SaC8BxxUPZQ2HPwEApnNlcG1yMBJUe7W4n4DRJZlcYXkGV9yE8NA6BLwGJEW0szazg3rOmYtrXNmULpOVKrq-h0697Yebh1mZUJAO0hfHySbXoR",
        resourceCount: "8",
      },
    ],
    comments: [
      {
        authorName: "Sunita Thapa",
        authorAvatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuChjtUH2GmU1FYIOc4qNdf8SYfvLp7uP208kKacMZkMCnVu_A5D8XN1ZKUsr44ldhnk9QmgFrYs2uTGfPqRK0eCXOFYce0Oys5J9wPZbOtnAYi_ev-uKH3VtkJWulDPNacHyoHOMRDYI-qoAO0b7WiV7HXLu65KEzoJuT5stPI5ZzR5B2w4tB7wqVd_N4_jW78xWMlEOggZT7y3neXRIwjT65FjLPUDDAxlv0i8xjg7n5MY2a-SEVQh-750GWORgc_7cSNbS8SVugK5",
        timeAgo: "2 hours ago",
        content:
          "The flowchart explanation in the editorial notes is top-tier. Really helped me understand the compilation process which I found confusing during lectures.",
        likes: 4,
      },
      {
        authorName: "Abhishek K.",
        authorAvatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCAwgJedGGh9O4wArgRXyDxV6Rcdul4xn0gZqi_p5xXkcdfUvhakMYHfil0qE6A9QQdQN6zT0MQ7xpoCBZWuMIOCY5zhioXbQ5ZKhkWDQUD51ivhqonBQUVsZTVsnThz2_RePIGtECToMi84iMlxEUko7sCd3sXqA8McJ6o9j3Hc-VYyhnlii6e9St4SNXB1DDpHx-_Odukz6qqoQuIzWfLjub6Psep1X1REewFgVNMBtm1d3uiT7vAQ6aDO5N3DF50a4uR1m1iTcex",
        timeAgo: "1 day ago",
        content:
          "Can anyone suggest which book is better for Chapter 1: Balaguruswamy or Let Us C?",
        likes: 2,
      },
    ],
  },
};

export function getChapterData(
  universitySlug: string,
  programSlug: string,
  semesterSlug: string,
  subjectSlug: string,
  chapterSlug: string,
): ChapterPageData | undefined {
  const key = `${universitySlug}/${programSlug}/${semesterSlug}/${subjectSlug}/${chapterSlug}`;
  return chaptersData[key];
}

export function getAllChapterParams(): {
  slug: string;
  program: string;
  semester: string;
  subject: string;
  chapter: string;
}[] {
  const params: {
    slug: string;
    program: string;
    semester: string;
    subject: string;
    chapter: string;
  }[] = [];

  for (const key of Object.keys(chaptersData)) {
    const [uniSlug, progSlug, semSlug, subSlug, chapSlug] = key.split("/");
    params.push({
      slug: uniSlug,
      program: progSlug,
      semester: semSlug,
      subject: subSlug,
      chapter: chapSlug,
    });
  }
  return params;
}
