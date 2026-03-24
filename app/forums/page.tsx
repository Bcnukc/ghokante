// app/forums/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ForumPostCard from "@/components/ui/ForumPostCard";
import ForumTabs from "@/components/ui/ForumTabs";
import {
  forumCategories,
  forumPosts,
  trendingTopics,
  expertContributors,
  communityStats,
} from "@/lib/forums-data";

export const metadata: Metadata = {
  title: "Forums",
  description:
    "Join the Ghokante Community forums. Engage in scholarly discussions, share confessions, and connect with the community.",
};

export default function ForumsPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-screen-2xl mx-auto px-8 pt-12 pb-24">
        {/* Hero Header */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4 block">
              The Digital Atheneum
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary tracking-tighter leading-none mb-6">
              Community Forums
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-body max-w-2xl">
              A collaborative space for scholarly debate, peer support, and
              university life discourse.
            </p>
          </div>
          <div className="flex items-center">
            <button className="bg-tertiary text-white font-headline font-bold px-8 py-4 rounded-xl flex items-center gap-3 hover:scale-95 transition-transform duration-150 shadow-xl shadow-tertiary/20 cursor-pointer">
              <span className="material-symbols-outlined">add_circle</span>
              Start Discussion
            </button>
          </div>
        </header>

        {/* Three-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ======================== */}
          {/* Left Sidebar: Categories */}
          {/* ======================== */}
          <aside className="lg:col-span-3 space-y-12">
            {/* Categories */}
            <section>
              <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-outline mb-6">
                Categories
              </h3>
              <div className="space-y-2">
                {forumCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/forums/category/${cat.slug}`}
                    className={`flex items-center justify-between p-4 rounded-xl hover:bg-primary-fixed/30 transition-colors group ${
                      cat.active
                        ? "bg-surface-container-lowest"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`material-symbols-outlined ${
                          cat.active ? "text-primary" : "text-outline"
                        }`}
                      >
                        {cat.icon}
                      </span>
                      <span
                        className={`font-headline text-on-surface ${
                          cat.active ? "font-bold" : "font-medium"
                        }`}
                      >
                        {cat.name}
                      </span>
                    </div>
                    <span className="font-headline text-xs text-outline group-hover:text-primary">
                      {cat.postCount}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Community Stats */}
            <section className="bg-surface-container-low p-8 rounded-2xl">
              <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-outline mb-6">
                Community Stats
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-headline text-2xl font-extrabold text-primary">
                    {communityStats.activeScholars}
                  </p>
                  <p className="font-body text-sm italic text-on-surface-variant">
                    Active Scholars
                  </p>
                </div>
                <div>
                  <p className="font-headline text-2xl font-extrabold text-primary">
                    {communityStats.discussionsToday}
                  </p>
                  <p className="font-body text-sm italic text-on-surface-variant">
                    Discussions Today
                  </p>
                </div>
              </div>
            </section>
          </aside>

          {/* ======================== */}
          {/* Main Content: Feed       */}
          {/* ======================== */}
          <div className="lg:col-span-6 space-y-10">
            <section>
              {/* Section header + tabs */}
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="font-headline text-2xl font-bold text-primary">
                  Trending Discourse
                </h2>
                <ForumTabs />
              </div>

              {/* Post cards */}
              <div className="space-y-8">
                {forumPosts.map((post) => (
                  <ForumPostCard key={post.id} {...post} />
                ))}
              </div>

              {/* Load more */}
              <button className="w-full mt-12 py-4 font-headline text-sm font-bold text-primary hover:bg-primary-fixed/20 rounded-xl transition-colors cursor-pointer">
                Load More Knowledge Assets
              </button>
            </section>
          </div>

          {/* ======================== */}
          {/* Right Sidebar            */}
          {/* ======================== */}
          <aside className="lg:col-span-3 space-y-12">
            {/* Trending Now */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow">
              <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-outline mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">
                  trending_up
                </span>
                Trending Now
              </h3>
              <ul className="space-y-6">
                {trendingTopics.map((topic) => (
                  <li key={topic.title}>
                    <Link href={topic.href} className="group">
                      <p className="font-headline text-[10px] text-tertiary font-bold uppercase mb-1">
                        {topic.category}
                      </p>
                      <p className="font-body text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                        {topic.title}
                      </p>
                      <p className="font-headline text-xs text-outline mt-1">
                        {topic.stat}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Expert Contributors */}
            <section>
              <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-outline mb-6">
                Expert Contributors
              </h3>
              <div className="space-y-4">
                {expertContributors.map((expert) => (
                  <div key={expert.name} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                      <Image
                        src={expert.avatarUrl}
                        alt={expert.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-headline text-sm font-bold text-on-surface">
                        {expert.name}
                      </p>
                      <p className="font-headline text-[10px] text-outline">
                        {expert.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
