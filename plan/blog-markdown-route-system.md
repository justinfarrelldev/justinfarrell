# Blog Markdown Route System

## Final scope

A server-rendered, Markdown-powered blog at `/blog` and `/blog/:slug`.
The final version intentionally excludes view counts, the tracking API, consent
banners, and localStorage tracking. Earlier staged tracking code was removed.

## Completed

- [x] Follow existing file-system route conventions and lint rules.
- [x] Store article bodies in `app/content/blog/posts/*.md`.
- [x] Store metadata in `app/content/blog/articles.json` with `slug`, `title`,
      `description`, required `publishedAt`, and optional `updatedAt`.
- [x] Use explicit ISO UTC dates rather than deployment-dependent file timestamps;
      default `updatedAt` to `publishedAt` when omitted and display dates in UTC
      consistently across browser timezones.
- [x] Validate metadata fields, URL-safe unique slugs, valid dates, update ordering,
      and metadata-to-Markdown file mappings.
- [x] Parse Markdown and sanitize HTML on the server with `sanitize-html`.
- [x] Sort the landing page by publication date, newest first.
- [x] Render article cards, descriptions, dates, and article links.
- [x] Render semantic Markdown headings, lists, and article content.
- [x] Use a black background and subtle bottom green gradient, without particles.
- [x] Return 404 for unknown articles without disguising server failures as 404s.
- [x] Provide distinct missing-article and server-error messages.
- [x] Replace sample heading placeholders with an introductory article.
- [x] Document authoring and production content requirements in `README.md`.
- [x] Red–green tests for sanitization, stable dates, metadata validation, error
      handling, and the finished article content.
- [x] Pass lint, integration tests, typecheck, build, and blog E2E tests across
      Chromium, Firefox, and WebKit.

## Verification

Final checks passed: `pnpm lint`, `pnpm integration` (33 tests),
`pnpm typecheck`, `pnpm build`, and `pnpm e2e` (33 tests across Chromium,
Firefox, and WebKit, including timezone coverage).

Command output is recorded in root `temp.log` (local, ignored). Existing homepage
DOM nesting warnings, route-test hydration fallback warnings, and toolchain
Browserslist/deprecation notices are unrelated to the blog implementation.
