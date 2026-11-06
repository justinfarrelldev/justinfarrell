import { beforeEach, describe, expect, it, vi } from 'vitest';
import { readFile } from 'node:fs/promises';
import { serverBlogDataDependencies } from './blogData.server';

vi.mock('node:fs/promises', async (importOriginal) => {
    const actual = await importOriginal<typeof import('node:fs/promises')>();
    const mocked = { ...actual, readFile: vi.fn() };
    return { ...mocked, default: mocked };
});

const metadata = {
    slug: 'first-post',
    title: 'First Post',
    description: 'A first article.',
    publishedAt: '2026-03-01T00:00:00.000Z',
};

beforeEach(() => {
    vi.resetAllMocks();
});

describe('blog metadata validation', () => {
    it('accepts explicit publication dates without requiring an update date', async () => {
        vi.mocked(readFile).mockResolvedValue(JSON.stringify([metadata]));

        expect(await serverBlogDataDependencies.readMetadata()).toEqual([
            metadata,
        ]);
    });

    it.each([
        { publishedAt: undefined },
        { publishedAt: 'not-a-date' },
        { publishedAt: '2026-02-30T00:00:00.000Z' },
        { updatedAt: '2026-02-01T00:00:00.000Z' },
        { slug: '../outside' },
        { title: '' },
    ])('rejects invalid metadata: %j', async (overrides) => {
        vi.mocked(readFile).mockResolvedValue(
            JSON.stringify([{ ...metadata, ...overrides }])
        );

        await expect(
            serverBlogDataDependencies.readMetadata()
        ).rejects.toThrow();
    });

    it('rejects duplicate slugs', async () => {
        vi.mocked(readFile).mockResolvedValue(
            JSON.stringify([metadata, metadata])
        );

        await expect(serverBlogDataDependencies.readMetadata()).rejects.toThrow(
            /duplicate/i
        );
    });
});
