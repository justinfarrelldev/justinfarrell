import type { MetaFunction } from '@remix-run/node';
import {
    ABOUT_LINK_TEXT,
    ABOUT_TEXT,
    EXPERIENCE_LINK_TEXT,
    EXPERIENCE_TEXT,
    MAIN_HEADING_TEXT,
    MAIN_SUBHEADING_TEXT,
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
            <section>
                <div className="md:fixed">
                    <h1 className="text-6xl font-bold">{MAIN_HEADING_TEXT}</h1>
                    <h3 className="pt-5 text-2xl">{MAIN_SUBHEADING_TEXT}</h3>
                    <a href="/#about">
                        <h3 className="pt-16 text-xl text-primary">
                            {ABOUT_LINK_TEXT}
                        </h3>
                    </a>
                    <a href="/#experience">
                        <h3 className="text-xl text-primary">
                            {EXPERIENCE_LINK_TEXT}
                        </h3>
                    </a>
                    {/* <a href="/#resume">
                        <h3 className="text-xl">{RESUME_LINK_TEXT}</h3>
                    </a> */}
                </div>
                <div className="grid h-screen lg:grid-cols-2">
                    <div>
                        {/* This div is empty to push the other column over */}
                    </div>
                    <div>
                        <div id="about">
                            <h3 className="text-2xl">{ABOUT_TEXT}</h3>
                        </div>
                        <div id="experience">
                            <h3 className="pt-16 text-2xl">
                                {EXPERIENCE_TEXT}
                            </h3>
                        </div>
                        {/* <p id="resume">Testing</p> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
