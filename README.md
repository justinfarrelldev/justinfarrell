# Justin Farrell's Personal Site

This is the source code for my personal site hosted at [justin-farrell.com](https://www.justin-farrell.com/)!

## Development

Run the Vite dev server:

```shellscript
pnpm run dev
```

## Writing blog articles

1. Create `app/content/blog/posts/<slug>.md`. Use a lowercase, hyphen-separated
   slug. The page supplies the article title as its H1; start body sections at H2.
2. Add a record to `app/content/blog/articles.json`:

   ```json
   {
     "slug": "my-article",
     "title": "My Article",
     "description": "A short summary for the blog listing.",
     "publishedAt": "2026-03-01T18:00:00.000Z"
   }
   ```

   Dates must use the exact ISO UTC format above. Add `updatedAt` when editing a
   published article; it must not precede `publishedAt`. Without it, the page
   displays “No edits yet.” Dates are explicit so deployments do not reset them,
   and are displayed in UTC to keep server and browser rendering consistent.
3. Preview `/blog` and `/blog/<slug>` with `pnpm dev`. Articles are listed newest
   first. Markdown HTML is sanitized; scripts and unsafe URLs are stripped.
4. Run `pnpm lint`, `pnpm integration`, `pnpm typecheck`, `pnpm build`, and
   `pnpm e2e tests/blog.spec.ts` before publishing.

The blog does not record views or store consent/view markers in localStorage.

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### Hosting

If you are going to fork this code, I highly recommend hosting it on Fly.io. I originally hosted this project on Vercel, but eventually chose to go with Fly.io due to issues with Vercel functions and long-running requests with the LLM.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`
- `app/content/blog` (metadata and Markdown are read at runtime, relative to the
  project working directory)

The existing Dockerfile copies the content directory into the final image.
