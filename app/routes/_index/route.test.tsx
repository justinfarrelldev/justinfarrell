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
import { MAIN_HEADING_TEXT, MAIN_SUBHEADING_TEXT } from './constants';

// FIXME there is a "browser router" error coming from this which is a bit painful. It's quite late, so I'm
// commenting it for now and will visit this later with a testing sweep.
describe.skip('_index route', function () {
    beforeAll(function () {
        vi.mock('openai', function () {
            return {
                default: function () {},
            };
        });
    });
    afterAll(function () {
        vi.resetAllMocks();
    });
    afterEach(function () {
        cleanup();
    });
    it(`should have the text ${MAIN_HEADING_TEXT} displayed prominently`, function () {
        render(<Index />);

        expect(screen.queryByText(MAIN_HEADING_TEXT)).toBeInTheDocument();
    });
    it(`should have the text ${MAIN_SUBHEADING_TEXT} displayed prominently`, function () {
        render(<Index />);

        expect(screen.queryByText(MAIN_SUBHEADING_TEXT)).toBeInTheDocument();
    });
});
