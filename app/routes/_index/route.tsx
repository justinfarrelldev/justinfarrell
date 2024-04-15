import type { MetaFunction } from '@remix-run/node';
import {
    ABOUT_LINK_TEXT,
    ABOUT_TEXT,
    EXPERIENCE_LINK_TEXT,
    EXPERIENCE_TEXT,
    MAIN_HEADING_TEXT,
    MAIN_SUBHEADING_TEXT,
    SKILLS_LINK_TEXT,
    SKILLS_TEXT,
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
                    <p className="pt-5 text-2xl">{MAIN_SUBHEADING_TEXT}</p>
                    <a href="/#about">
                        <p className="pt-16 text-xl text-primary">
                            {ABOUT_LINK_TEXT}
                        </p>
                    </a>
                    <a href="/#experience">
                        <p className="text-xl text-primary">
                            {EXPERIENCE_LINK_TEXT}
                        </p>
                    </a>
                    <a href="/#skills">
                        <p className="text-xl text-primary">
                            {SKILLS_LINK_TEXT}
                        </p>
                    </a>
                    {/* <a href="/#resume">
                        <p className="text-xl">{RESUME_LINK_TEXT}</p>
                    </a> */}
                </div>
                <div className="grid h-screen lg:grid-cols-2">
                    <div>
                        {/* This div is empty to push the other column over */}
                    </div>
                    <div>
                        <div id="about">
                            <p className="text-2xl">{ABOUT_TEXT}</p>
                        </div>
                        <div id="experience">
                            <p className="pt-16 text-2xl">{EXPERIENCE_TEXT}</p>
                        </div>
                        <div id="skills">
                            <p className="pt-16 text-2xl">{SKILLS_TEXT}</p>
                        </div>
                        {/* <p id="resume">Testing</p> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
