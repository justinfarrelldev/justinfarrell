import type { MetaFunction } from 'react-router';
import {
    Link,
    data,
    isRouteErrorResponse,
    useLoaderData,
    useRouteError,
} from 'react-router';
import {
    BlogArticleNotFoundError,
    getBlogArticleBySlug,
} from '~/utils/blogData';
import { serverBlogDataDependencies } from '~/utils/blogData.server';

export const meta: MetaFunction<typeof loader> = ({ data: routeData }) => {
    const articleTitle = routeData?.article.title ?? 'Blog Article';
    const articleDescription =
        routeData?.article.description ??
        'Technical writing and engineering updates from Justin Farrell.';

    return [
        { title: `${articleTitle} | Justin Farrell` },
        { name: 'description', content: articleDescription },
    ];
};

export const loader = async ({ params }: { params: { slug?: string } }) => {
    if (!params.slug) {
        throw data('Article not found.', { status: 404 });
    }

    try {
        const article = await getBlogArticleBySlug(
            params.slug,
            serverBlogDataDependencies
        );

        return { article };
    } catch (error) {
        if (error instanceof BlogArticleNotFoundError) {
            throw data('Article not found.', { status: 404 });
        }
        throw error;
    }
};

const formatDateTime = (isoDateString: string): string =>
    `${new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'UTC',
    }).format(new Date(isoDateString))} UTC`;

const BlogArticleRoute = () => {
    const { article } = useLoaderData<typeof loader>();

    const wasUpdated = article.updatedAt !== article.publishedAt;

    return (
        <main className="min-h-screen bg-black bg-gradient-to-t from-primary/20 to-black px-4 py-10">
            <div className="mx-auto max-w-5xl">
                <div className="mb-6">
                    <Link className="btn btn-ghost btn-sm" to="/blog">
                        ← Back to blog
                    </Link>
                </div>

                <article className="prose-invert prose max-w-none rounded-xl border border-primary/20 bg-base-200/40 p-6">
                    <h1>{article.title}</h1>
                    <p className="not-prose text-sm text-base-content/70">
                        Posted: {formatDateTime(article.publishedAt)}
                    </p>
                    <p className="not-prose text-sm text-base-content/70">
                        Last edited:{' '}
                        {wasUpdated
                            ? formatDateTime(article.updatedAt)
                            : 'No edits yet'}
                    </p>
                    <div
                        dangerouslySetInnerHTML={{ __html: article.html }}
                        className="pt-4 [&_h1]:mt-8 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:text-primary [&_h2]:mt-6 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-primary [&_h3]:mt-5 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-primary [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_p]:leading-8 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6"
                        data-testid="blog-article-content"
                    />
                </article>
            </div>
        </main>
    );
};

export const ErrorBoundary = () => {
    const error = useRouteError();
    const notFound = isRouteErrorResponse(error) && error.status === 404;

    return (
        <main className="min-h-screen bg-black bg-gradient-to-t from-primary/20 to-black px-4 py-10">
            <div className="mx-auto max-w-3xl rounded-xl border border-primary/20 bg-base-200/40 p-6">
                <h1 className="text-2xl font-bold text-primary">
                    {notFound ? 'Article not found' : 'Unable to load article'}
                </h1>
                <p className="pt-2 text-base-content/80">
                    {notFound
                        ? 'The requested article does not exist.'
                        : 'Something went wrong. Please try again later.'}
                </p>
                <div className="pt-4">
                    <a className="btn btn-primary btn-sm" href="/blog">
                        Back to blog
                    </a>
                </div>
            </div>
        </main>
    );
};

export default BlogArticleRoute;
