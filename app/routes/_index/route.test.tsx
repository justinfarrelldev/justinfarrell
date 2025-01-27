import {
    afterAll,
    afterEach,
    beforeAll,
    describe,
    expect,
    it,
    vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Index from './route';
import {
    ABOUT_LINK_TEXT,
    ABOUT_TEST_ID,
    EXPERIENCE_LINK_TEXT,
    EXPERIENCE_TEST_ID,
    INQUIRE_LINK_TEXT,
    MAIN_HEADING_TEXT,
    MAIN_SUBHEADING_TEXT,
    SKILLS_LINK_TEXT,
} from './constants';
import { createRemixStub } from '@remix-run/testing';

const RemixStub = createRemixStub([
    {
        path: '/',
        Component: Index,
    },
]);

describe('_index route', () => {
    beforeAll(() => {
        vi.mock('openai', () => {
            return {
                // eslint-disable-next-line prefer-arrow-functions/prefer-arrow-functions
                default: function () {},
            };
        });
    });
    afterAll(() => {
        vi.resetAllMocks();
    });
    afterEach(() => {
        cleanup();
    });
    it(`should have the text ${MAIN_HEADING_TEXT} displayed prominently`, () => {
        render(<RemixStub />);

        expect(screen.queryByText(MAIN_HEADING_TEXT)).toBeInTheDocument();
    });
    it(`should have the text ${MAIN_SUBHEADING_TEXT} displayed prominently`, () => {
        render(<RemixStub />);

        expect(
            screen.queryAllByText(MAIN_SUBHEADING_TEXT).length
        ).toBeGreaterThanOrEqual(1);
    });
    it(`should contain the text "${ABOUT_LINK_TEXT}" twice - one for the navigation and one for the element`, () => {
        render(<RemixStub />);

        expect(
            screen.queryAllByText(ABOUT_LINK_TEXT, { exact: true })
        ).toHaveLength(2);
    });
    it(`should contain the text "${INQUIRE_LINK_TEXT}" twice - one for the navigation and one for the element`, () => {
        render(<RemixStub />);

        expect(
            screen.queryAllByText(INQUIRE_LINK_TEXT, { exact: true })
        ).toHaveLength(2);
    });
    it(`should contain the text "${EXPERIENCE_LINK_TEXT}" twice - one for the navigation and one for the element`, () => {
        render(<RemixStub />);

        expect(
            screen.queryAllByText(EXPERIENCE_LINK_TEXT, { exact: true })
        ).toHaveLength(2);
    });
    it(`should contain the text "${SKILLS_LINK_TEXT}" twice - one for the navigation and one for the element`, () => {
        render(<RemixStub />);

        expect(
            screen.queryAllByText(SKILLS_LINK_TEXT, { exact: true })
        ).toHaveLength(2);
    });
    it(`should be able to locate the test ID for the "About" section paragraphs since it should be open initially`, () => {
        render(<RemixStub />);

        expect(screen.queryByTestId(ABOUT_TEST_ID)).toBeInTheDocument();
    });
    it(`should NOT be able to locate the test ID for the "Experience" section since it should NOT be open initially`, () => {
        render(<RemixStub />);

        expect(
            screen.queryByTestId(EXPERIENCE_TEST_ID)
        ).not.toBeInTheDocument();
    });
});
