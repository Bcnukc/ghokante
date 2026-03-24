// app/universities/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import UniversityDetailCard from "@/components/ui/UniversityDetailCard";
import type { UniversityDetail } from "@/types";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "Explore Nepal's leading academic institutions. Access curated resources, past questions, and lecture notes specific to your university's curriculum.",
};

const universities: UniversityDetail[] = [
  {
    name: "Tribhuvan University",
    abbreviation: "TU",
    slug: "tu",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6ktssrgTgc6UUBRmP_D_pKRPo3vhcSm2QBQmYYy5cN1-EyXiltCGWd-rhEkBIBOp6F--JDraNoVTVs6mySQdnRnGpiCVwgMZY_fUjsS9jtoW--NfvndUl8htcwaGoH4m_U7p8NUH3j7JurVvxgvetPZXR_sj5ll5rU5hAgbuBl_Du2rFEZP-yXEQtVpXLMoa7wj-2W74aCK3fnXcg3z8vpJf09YMB4h4lWGfdnwE8WpelhdVYNO29kQF2-paHFez947GnfF3_LfW",
    streams: "12+",
    resources: "45.2k",
    contributors: "1.2k",
    badge: "Premier Institution",
  },
  {
    name: "Pokhara University",
    abbreviation: "PU",
    slug: "pu",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGpzXfokLv6EK5yiPukc7GIGwjbGk63_KRABa-7fWGDqZSSH4hFccaZ4VoVoUlFqCACxsDbi0owgo5GXpQlYMbk6_9gx1GWx--4kMrxKO5TFTlFoIbMhLPGBMzad8hLsSgVEyYa5lgexUYISIDD1JesMPQMf2yWQn27BoKoVSOuplU1mUEE9Wdd0UNWoD-FJ8BrAya-zFB-biwdNckAC13zYusyp_dquxXssjHUE0Se4HJugPnTkZLttcJH8_ncelQTUmCXlV9M9UY",
    streams: "8+",
    resources: "22.8k",
    contributors: "840",
  },
  {
    name: "Kathmandu University",
    abbreviation: "KU",
    slug: "ku",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA09pgrKI799u75S_N_84SZhLGlNFDxjBbagTNV3kXUsuwGWVtbe0tnL7zE_D34ID9oV43s29E4RrijtYEWGGwGxfnJ8SDPLLnZgGBQ3cEUTfNTt5uC88ZKVvnLsrNAiThBctgjf7u9rth_1Gl3q3EiKSSSY4I2ItdaZU6Tf0F9deg9hjOEZ9faEz2gmC74KPxn5SOMdR_kJpcNmSfdFYzp6Ncw8o7Txy6xfKLJF81qYk-_rNYR_0su2Dk6DUQbTQn6vw00H5UJg9Ox",
    streams: "15+",
    resources: "18.5k",
    contributors: "650",
  },
  {
    name: "Purbanchal University",
    abbreviation: "POU",
    slug: "pou",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCPOGj-lkkgN_R1I0u2Z9Uc4FP8LECPvpy1xo7zkdEHIZZEiOqT40YiGq7VuQZeFx5ciet5ARZWRGHpVxsaAif3ya9jMW1MSDC1SDUfjqQuv7eB6J2kfqP1Ok8IjI3SSSRfiK-CwZOO4ly7z8dO2d5JcXd4R9Z3xp8jKnj2SabeiX2RgGbKzjkHvRIL7BPOm8xU98XkQBYG9MtW0GvD9VU0ym9p6aYl7CVyEcJJ-neFmf7Tf2uJsnmjJ0CijgtpO1gKDdIKI-TpS6k",
    streams: "6+",
    resources: "12.1k",
    contributors: "310",
  },
];

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb & Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Universities" }]}
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="font-headline font-extrabold text-on-surface leading-tight mb-4 text-5xl md:text-6xl tracking-tighter">
              Academic{" "}
              <span className="text-primary italic font-body font-light">
                Ecosystems.
              </span>
            </h1>
            <p className="text-on-surface-variant leading-relaxed opacity-80">
              Explore Nepal&apos;s leading academic institutions. Access curated
              resources, past questions, and lecture notes specific to your
              university&apos;s curriculum.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-label font-bold text-on-surface-variant">
                {universities.length} Universities Active
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* University Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {universities.map((uni) => (
            <UniversityDetailCard key={uni.slug} {...uni} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-low py-24 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-label font-black text-[10px] tracking-[0.3em] uppercase text-primary mb-6 block">
            The Digital Atheneum
          </span>
          <h2 className="font-headline font-extrabold text-on-surface mb-6 text-4xl">
            Missing your University?
          </h2>
          <p className="text-on-surface-variant mb-10 opacity-70">
            Ghokante is built by the community. Help us expand our digital
            library by contributing resources or requesting your
            university&apos;s curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/upload"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold active:scale-95 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">add_circle</span>
              Contribute Resources
            </Link>
            <Link
              href="/contact"
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-headline font-bold active:scale-95 transition-all hover:bg-secondary-fixed flex items-center justify-center gap-2"
            >
              Request Institution
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
