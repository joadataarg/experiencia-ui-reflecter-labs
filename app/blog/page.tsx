"use client";

import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

export default function BlogPage() {
  const { t } = useLocale();
  const posts = t.blogPosts;

  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.blog.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t.blog.homeSubtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border p-6 transition-colors hover:border-foreground/20"
            >
              <span className="w-fit rounded-full border border-border px-3 py-1 font-mono text-xs font-medium text-muted-foreground">
                {post.category}
              </span>
              <h2 className="mt-4 font-mono text-base font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-foreground/80 transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime} {t.blog.minRead}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                <span>{t.blog.readMore}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.common.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
