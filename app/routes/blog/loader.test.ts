import { describe, expect, it, vi } from 'vitest';
import { loader } from '../blog.$slug/route';
import { getBlogArticleBySlug } from '~/utils/blogData';

vi.mock('~/utils/blogData', async (importOriginal) => ({
    ...(await importOriginal<typeof import('~/utils/blogData')>()),
    getBlogArticleBySlug: vi.fn(),
}));

describe('blog article loader', () => {
    it('does not disguise server failures as missing articles', async () => {
        const error = new Error('Cannot read blog content');
        vi.mocked(getBlogArticleBySlug).mockRejectedValueOnce(error);

        await expect(loader({ params: { slug: 'first-post' } })).rejects.toBe(
            error
        );
    });
});
