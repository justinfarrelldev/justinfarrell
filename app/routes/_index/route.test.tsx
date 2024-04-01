import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Index from './route';
import { MAIN_HEADING_TEXT, MAIN_SUBHEADING_TEXT } from './constants';

describe('_index route', function () {
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
