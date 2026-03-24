// lib/universities-data.ts
import type { UniversityPageData } from "@/types";

export const universitiesData: Record<string, UniversityPageData> = {
  tu: {
    name: "Tribhuvan University",
    abbreviation: "TU",
    slug: "tu",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3RMc1JqbtVfwmVo-jAn9KLSVmt56GRSU6cUfM5CYg2ZqIXQLyP0LcBC-dYlVPKcBbvKgflcb3-TIgGBnzE1dXiCkkDriSqzvxeFG3qL9hEqCGMtH9wW7s4STYQgwCYBgAJ8OhPH2_m2tc14CCF-EpA_36PR4Yb4GJzN72LqTD1NDoxTO8MzvcCm8ON6CD0fRELdOLa0etwvM9GqBSpz76TPpkBoEjxtwtlQqBWzPo034CYe1zIJ8Tl8p08KC5b-XGR-sEc7HxKtgB",
    established: "1959 AD",
    description:
      "The pioneer of higher education in Nepal, fostering academic excellence and providing the most comprehensive collection of scholarly resources for students across the nation.",
    programs: [
      {
        name: "BSc CSIT",
        slug: "bsc-csit",
        abbreviation: "BSc CSIT",
        description:
          "The Bachelor of Science in Computer Science and Information Technology program, providing deep technical foundations and modern computing skills.",
        icon: "computer",
        iconColor: "text-primary",
        duration: "8 Semesters",
        resources: "1,240+",
        featured: true,
        badge: "Premier Stream",
      },
      {
        name: "Bachelor of Computer Applications",
        slug: "bca",
        abbreviation: "BCA",
        description:
          "Bachelor of Computer Applications focusing on software development and systems management.",
        icon: "integration_instructions",
        iconStyle: "filled",
        iconColor: "text-tertiary",
        duration: "8 Semesters",
        resources: "850",
      },
      {
        name: "Bachelor of Information Technology",
        slug: "bit",
        abbreviation: "BIT",
        description:
          "Bachelor of Information Technology bridge between computer science and business enterprise.",
        icon: "lan",
        iconColor: "text-secondary",
        duration: "8 Semesters",
        resources: "420",
      },
      {
        name: "Bachelor of Business Studies",
        slug: "bbs",
        abbreviation: "BBS",
        description:
          "Bachelor of Business Studies focusing on management, accounting, and finance.",
        icon: "payments",
        iconColor: "text-on-tertiary-fixed-variant",
        duration: "4 Years",
        resources: "1.5k",
      },
      {
        name: "Bachelor of Arts",
        slug: "ba",
        abbreviation: "BA",
        description:
          "Bachelor of Arts offering diverse majors in humanities and social sciences.",
        icon: "auto_stories",
        iconColor: "text-on-secondary-fixed-variant",
        duration: "3 Years",
        resources: "2.1k",
      },
    ],
  },
  pu: {
    name: "Pokhara University",
    abbreviation: "PU",
    slug: "pu",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGpzXfokLv6EK5yiPukc7GIGwjbGk63_KRABa-7fWGDqZSSH4hFccaZ4VoVoUlFqCACxsDbi0owgo5GXpQlYMbk6_9gx1GWx--4kMrxKO5TFTlFoIbMhLPGBMzad8hLsSgVEyYa5lgexUYISIDD1JesMPQMf2yWQn27BoKoVSOuplU1mUEE9Wdd0UNWoD-FJ8BrAya-zFB-biwdNckAC13zYusyp_dquxXssjHUE0Se4HJugPnTkZLttcJH8_ncelQTUmCXlV9M9UY",
    established: "1997 AD",
    description:
      "A leading research university in western Nepal, known for its innovative teaching methodologies and industry-aligned academic programs.",
    programs: [
      {
        name: "Bachelor of Engineering",
        slug: "be",
        abbreviation: "BE",
        description:
          "Bachelor of Engineering with specializations in Civil, Computer, and Electronics.",
        icon: "engineering",
        iconColor: "text-primary",
        duration: "8 Semesters",
        resources: "980",
        featured: true,
        badge: "Top Program",
      },
      {
        name: "Bachelor of Business Administration",
        slug: "bba",
        abbreviation: "BBA",
        description:
          "Bachelor of Business Administration with focus on entrepreneurship and management.",
        icon: "business_center",
        iconColor: "text-tertiary",
        duration: "8 Semesters",
        resources: "720",
      },
      {
        name: "Bachelor of Science in Computing",
        slug: "bsc-computing",
        abbreviation: "BSc Computing",
        description:
          "Computing program combining theoretical CS with practical application development.",
        icon: "code",
        iconColor: "text-secondary",
        duration: "8 Semesters",
        resources: "540",
      },
    ],
  },
  ku: {
    name: "Kathmandu University",
    abbreviation: "KU",
    slug: "ku",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA09pgrKI799u75S_N_84SZhLGlNFDxjBbagTNV3kXUsuwGWVtbe0tnL7zE_D34ID9oV43s29E4RrijtYEWGGwGxfnJ8SDPLLnZgGBQ3cEUTfNTt5uC88ZKVvnLsrNAiThBctgjf7u9rth_1Gl3q3EiKSSSY4I2ItdaZU6Tf0F9deg9hjOEZ9faEz2gmC74KPxn5SOMdR_kJpcNmSfdFYzp6Ncw8o7Txy6xfKLJF81qYk-_rNYR_0su2Dk6DUQbTQn6vw00H5UJg9Ox",
    established: "1991 AD",
    description:
      "An autonomous, not-for-profit institution dedicated to maintaining high standards of academic excellence in science, management, arts, and education.",
    programs: [
      {
        name: "Bachelor of Engineering",
        slug: "be",
        abbreviation: "BE",
        description:
          "Comprehensive engineering program with multiple specializations including Computer, Civil, and Electrical.",
        icon: "precision_manufacturing",
        iconColor: "text-primary",
        duration: "8 Semesters",
        resources: "1,100",
        featured: true,
        badge: "Flagship Program",
      },
      {
        name: "Bachelor of Pharmacy",
        slug: "b-pharmacy",
        abbreviation: "B.Pharm",
        description:
          "Professional pharmacy program preparing students for pharmaceutical sciences and healthcare.",
        icon: "medication",
        iconColor: "text-tertiary",
        duration: "8 Semesters",
        resources: "380",
      },
    ],
  },
  pou: {
    name: "Purbanchal University",
    abbreviation: "POU",
    slug: "pou",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCPOGj-lkkgN_R1I0u2Z9Uc4FP8LECPvpy1xo7zkdEHIZZEiOqT40YiGq7VuQZeFx5ciet5ARZWRGHpVxsaAif3ya9jMW1MSDC1SDUfjqQuv7eB6J2kfqP1Ok8IjI3SSSRfiK-CwZOO4ly7z8dO2d5JcXd4R9Z3xp8jKnj2SabeiX2RgGbKzjkHvRIL7BPOm8xU98XkQBYG9MtW0GvD9VU0ym9p6aYl7CVyEcJJ-neFmf7Tf2uJsnmjJ0CijgtpO1gKDdIKI-TpS6k",
    established: "1994 AD",
    description:
      "Serving eastern Nepal with quality education programs in engineering, management, and health sciences.",
    programs: [
      {
        name: "Bachelor of Engineering",
        slug: "be",
        abbreviation: "BE",
        description:
          "Engineering programs with specializations in Civil, Computer, and Electronics.",
        icon: "architecture",
        iconColor: "text-primary",
        duration: "8 Semesters",
        resources: "650",
        featured: true,
        badge: "Core Program",
      },
      {
        name: "Bachelor of Business Administration",
        slug: "bba",
        abbreviation: "BBA",
        description:
          "Business administration with emphasis on regional economic development.",
        icon: "trending_up",
        iconColor: "text-secondary",
        duration: "8 Semesters",
        resources: "410",
      },
    ],
  },
};

export function getUniversityBySlug(
  slug: string,
): UniversityPageData | undefined {
  return universitiesData[slug];
}

export function getAllUniversitySlugs(): string[] {
  return Object.keys(universitiesData);
}
