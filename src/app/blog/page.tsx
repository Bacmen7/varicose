"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

const guideCategories = [
  { title: "Varicose veins", href: "/conditions/varicose-veins" },
  { title: "Symptoms & warning signs", href: "/blog/early-warning-signs" },
  { title: "Treatment options", href: "/treatments-overview" },
  { title: "Spider veins", href: "/conditions" },
  { title: "Recovery after treatment", href: "/treatments/evlt" },
  { title: "Pregnancy & veins", href: "/blog/early-warning-signs" },
];

const articleRows = [
  {
    title: "Varicose vein articles",
    image: "/user/varicose veins.png",
    href: "/conditions/varicose-veins",
    articles: [
      {
        title: "Why varicose veins happen",
        image: "/valve_reflux.png",
        readTime: "8 min read",
        href: "/blog/why-varicose-veins-happen",
      },
      {
        title: "Early warning signs you should not ignore",
        image: "/user/leg pain and heaviness.png",
        readTime: "5 min read",
        href: "/blog/early-warning-signs",
      },
      {
        title: "When should you see a doctor?",
        image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
        readTime: "4 min read",
        href: "/blog/when-to-see-doctor",
      },
      {
        title: "Varicose veins after pregnancy",
        image: "/user/spider vein.png",
        readTime: "6 min read",
        href: "/blog/early-warning-signs",
      },
    ],
  },
  {
    title: "Treatment articles",
    image: "/evlt.png",
    href: "/treatments-overview",
    articles: [
      {
        title: "EVLT for varicose veins: what to expect",
        image: "/evlt.png",
        readTime: "7 min read",
        href: "/treatments/evlt",
      },
      {
        title: "RFA treatment explained clearly",
        image: "/r1.png",
        readTime: "6 min read",
        href: "/treatments/rfa",
      },
      {
        title: "How treatment helps blood flow improve",
        image: "/valve_reflux.png",
        readTime: "5 min read",
        href: "/blog/why-varicose-veins-happen",
      },
      {
        title: "What recovery looks like after vein care",
        image: "/patient.png",
        readTime: "4 min read",
        href: "/treatments/evlt",
      },
    ],
  },
  {
    title: "Spider vein articles",
    image: "/user/spider vein.png",
    href: "/conditions",
    articles: [
      {
        title: "Spider veins vs varicose veins",
        image: "/user/spider vein.png",
        readTime: "5 min read",
        href: "/conditions",
      },
      {
        title: "Why tiny red and blue veins appear",
        image: "/user/chronic venus insufficiency.png",
        readTime: "6 min read",
        href: "/blog/why-varicose-veins-happen",
      },
      {
        title: "When spider veins need medical attention",
        image: "/user/leg pain and heaviness.png",
        readTime: "4 min read",
        href: "/blog/when-to-see-doctor",
      },
      {
        title: "Treatment options for visible surface veins",
        image: "/user/deep vein reflux.png",
        readTime: "5 min read",
        href: "/treatments-overview",
      },
    ],
  },
];

const moreTopics = [
  { title: "Varicose veins", href: "/conditions/varicose-veins" },
  { title: "Spider veins", href: "/conditions" },
  { title: "Leg swelling", href: "/conditions" },
  { title: "EVLT", href: "/treatments/evlt" },
  { title: "RFA", href: "/treatments/rfa" },
];

const latestArticles = [
  {
    title: "Why varicose veins happen",
    image: "/user/varicose veins.png",
    readTime: "8 min read",
    href: "/blog/why-varicose-veins-happen",
  },
  {
    title: "Early warning signs of vein disease",
    image: "/user/leg pain and heaviness.png",
    readTime: "5 min read",
    href: "/blog/early-warning-signs",
  },
  {
    title: "When to see a doctor for varicose veins",
    image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
    readTime: "4 min read",
    href: "/blog/when-to-see-doctor",
  },
];

function ArticleRow({ row }: { row: (typeof articleRows)[number] }) {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
        <Link href={row.href} className="group relative min-h-[360px] overflow-hidden bg-gray-100">
          <Image src={row.image} alt={row.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute left-8 top-8 max-w-[230px]">
            <h2 className="font-heading text-white text-2xl md:text-3xl leading-tight font-normal">
              {row.title}
            </h2>
          </div>
          <div className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary">
            <BookOpen size={20} strokeWidth={1.6} />
          </div>
        </Link>

        <div className="scrollbar-hidden flex gap-5 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {row.articles.map((article) => (
            <Link key={article.title} href={article.href} className="group flex min-h-[360px] w-[280px] shrink-0 flex-col bg-surface lg:w-[292px]">
              <div className="relative h-[190px] overflow-hidden">
                <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-secondary text-[22px] leading-snug font-normal">
                  {article.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="flex items-center gap-2 text-sm text-secondary">
                    <BookOpen size={18} strokeWidth={1.5} />
                    {article.readTime}
                  </span>
                  <ArrowRight size={20} className="text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-3">
        <button type="button" aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-secondary">
          <ChevronLeft size={20} />
        </button>
        <button type="button" aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-secondary">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white">
        <div className="relative z-0 h-[400px]">
          <Image src="/hero.png" alt="Varya Health guide" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/28" />
          <div className="relative mx-auto flex h-full max-w-[1200px] items-end px-4 pb-[98px]">
            <div className="max-w-[1100px]">
              <h1 className="font-body text-white text-3xl leading-tight md:text-4xl md:leading-[1.25] font-normal">
              Explore Health Guide
              <br />
              <span className="md:whitespace-nowrap">Reliable, relatable medical information in your hands.</span>
            </h1>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-16">
          <div className="-mt-[62px] grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {guideCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group flex min-h-[104px] items-center justify-between gap-4 bg-surface px-6 transition-colors hover:bg-accent-lighter"
              >
                <div className="flex items-center gap-4">
                  <BookOpen size={34} strokeWidth={1.25} className="text-secondary" />
                  <span className="font-body text-secondary text-lg md:text-xl leading-snug font-normal">
                    {category.title}
                  </span>
                </div>
                <span className="flex h-9 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          {articleRows.map((row) => (
            <ArticleRow key={row.title} row={row} />
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-background py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Fresh reads</p>
              <h2 className="font-heading text-secondary text-3xl md:text-4xl font-normal">Latest articles</h2>
            </div>
            <Link href="/blog-overview" className="inline-flex items-center gap-2 text-base font-semibold text-primary">
              View all articles
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {latestArticles.map((article) => (
              <Link key={article.title} href={article.href} className="group flex min-h-[360px] flex-col bg-surface">
                <div className="relative h-[190px] overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-secondary text-xl leading-snug font-normal">{article.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="flex items-center gap-2 text-sm text-secondary">
                      <BookOpen size={18} strokeWidth={1.5} />
                      {article.readTime}
                    </span>
                    <ArrowRight size={20} className="text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="font-heading mb-10 text-secondary text-3xl md:text-4xl font-normal">
            Explore more topics
          </h2>

          <div className="scrollbar-hidden flex gap-7 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {moreTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group relative flex h-[230px] w-[320px] shrink-0 overflow-hidden bg-accent p-8 transition-colors hover:bg-accent-light"
              >
                <h3 className="font-heading text-primary text-3xl font-normal leading-tight">
                  {topic.title}
                </h3>
                <span className="absolute bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/70 text-primary">
                  <BookOpen size={25} strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-5 flex justify-end gap-3">
            <button type="button" aria-label="Previous topics" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-secondary">
              <ChevronLeft size={20} />
            </button>
            <button type="button" aria-label="Next topics" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-secondary">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
