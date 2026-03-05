"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const { t } = useLocale();
  const params = useParams();
  const slug = params.slug as string;
  const post = t.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="relative z-10 pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-mono text-4xl font-semibold text-foreground">
            404
          </h1>
          <p className="mt-4 text-muted-foreground">Post not found.</p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.common.backHome}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.blog.heading}
        </Link>

        <div className="mt-8">
          <span className="w-fit rounded-full border border-border px-3 py-1 font-mono text-xs font-medium text-muted-foreground">
            {post.category}
          </span>
          <h1 className="mt-4 font-mono text-3xl font-semibold text-foreground lg:text-4xl leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground font-mono">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} {t.blog.minRead}
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">{post.excerpt}</p>
          <div className="rounded-2xl border border-border p-8 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              Full article content coming soon.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
