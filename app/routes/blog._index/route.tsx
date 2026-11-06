import type { MetaFunction } from 'react-router';
import { Link, useLoaderData } from 'react-router';
import { getBlogSummaries } from '~/utils/blogData';
import { serverBlogDataDependencies } from '~/utils/blogData.server';

export const meta: MetaFunction = () => [
    { title: 'Blog | Justin Farrell' },
    {
        name: 'description',
        content:
            'Markdown-powered engineering notes, updates, and technical articles.',
    },
];

export const loader = async () => {
    const articles = await getBlogSummaries(serverBlogDataDependencies);

    return { articles };
};

const formatDateTime = (isoDateString: string): string =>
    `${new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'UTC',
    }).format(new Date(isoDateString))} UTC`;

const BlogLandingRoute = () => {
    const { articles } = useLoaderData<typeof loader>();

    return (
        <main className="min-h-screen bg-black bg-gradient-to-t from-primary/20 to-black px-4 py-10">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-primary">Blog</h1>
                <p className="pt-3 text-base-content/80">
                    Articles are authored in Markdown and published with
                    lightweight JSON metadata.
                </p>

                <div className="mt-8 grid gap-6">
                    {articles.map((article) => {
                        const wasUpdated =
                            article.updatedAt !== article.publishedAt;

                        return (
                            <article
                                key={article.slug}
                                className="card border border-primary/20 bg-base-200/40"
                            >
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {article.title}
                                    </h2>
                                    <p className="text-base-content/80">
                                        {article.description}
                                    </p>
                                    <div className="text-sm text-base-content/70">
                                        <p>
                                            Posted:{' '}
                                            {formatDateTime(
                                                article.publishedAt
                                            )}
                                        </p>
                                        <p>
                                            Last edited:{' '}
                                            {wasUpdated
                                                ? formatDateTime(
                                                      article.updatedAt
                                                  )
                                                : 'No edits yet'}
                                        </p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            to={`/blog/${article.slug}`}
                                        >
                                            Read article
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default BlogLandingRoute;
