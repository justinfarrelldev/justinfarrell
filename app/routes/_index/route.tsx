import type { MetaFunction } from '@remix-run/node';
import {
    ABOUT_TEXT,
    MAIN_HEADING_TEXT,
    MAIN_SUBHEADING_TEXT,
    RESUME_TEXT,
} from './constants';

export const meta: MetaFunction = function () {
    return [
        { title: 'Justin Farrell' },
        {
            name: 'Justin Farrell - Software Engineer - Home',
            content:
                'Crafting Code Excellence: Full-Stack Mastery in JavaScript',
        },
    ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
            <h1 className="text-6xl font-bold">{MAIN_HEADING_TEXT}</h1>
            <h3 className="pt-5 text-2xl">{MAIN_SUBHEADING_TEXT}</h3>

            <a href="/#about">
                <h3 className="pt-16 text-xl">{ABOUT_TEXT}</h3>
            </a>
            <a href="/#resume">
                <h3 className="text-xl">{RESUME_TEXT}</h3>
            </a>
            <p id="about">About</p>
            <p id="resume">Testing</p>
        </div>
    );
}
