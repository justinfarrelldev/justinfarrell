import type { MetaFunction } from '@remix-run/node';
import {
    ABOUT_LINK_TEXT,
    ABOUT_TEXT,
    EXPERIENCE_LINK_TEXT,
    EXPERIENCE_TEXT,
    INQUIRE_LINK_TEXT,
    INQUIRE_TEXT,
    MAIN_HEADING_TEXT,
    MAIN_SUBHEADING_TEXT,
    SKILLS_LINK_TEXT,
    SKILLS_TEXT,
} from './constants';
import { useState } from 'react';

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
    // have to use state because DaisyUI only sets the display property for some reason
    const [openAccordionSection, setOpenAccordionSection] =
        useState<string>(ABOUT_LINK_TEXT);
    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
            <section>
                <div className="join join-vertical lg:fixed">
                    <h1 className="text-6xl font-bold">{MAIN_HEADING_TEXT}</h1>
                    <p className="pt-5 text-2xl">{MAIN_SUBHEADING_TEXT}</p>
                    <a href="/#about">
                        <p className="pt-16 text-xl text-primary">
                            {ABOUT_LINK_TEXT}
                        </p>
                    </a>
                    <a href="/#inquire">
                        <p className="text-xl text-primary">
                            {INQUIRE_LINK_TEXT}
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
                        <div
                            id="about"
                            className="collapse collapse-arrow overflow-visible border border-base-300 "
                        >
                            <input
                                type="radio"
                                name="content-accordion"
                                defaultChecked
                                onChange={function (event) {
                                    if (event.target.checked)
                                        setOpenAccordionSection(
                                            ABOUT_LINK_TEXT
                                        );
                                }}
                            />
                            <div className="collapse-title text-xl font-medium">
                                <p className="text-2xl">{ABOUT_LINK_TEXT}</p>
                            </div>
                            <div className="collapse-content">
                                {openAccordionSection === ABOUT_LINK_TEXT && (
                                    <p className="text-2xl">{ABOUT_TEXT}</p>
                                )}
                            </div>
                        </div>
                        <div
                            id="inquire"
                            className="collapse collapse-arrow overflow-visible border border-base-300 "
                        >
                            <input
                                type="radio"
                                name="content-accordion"
                                defaultChecked
                                onChange={function (event) {
                                    if (event.target.checked)
                                        setOpenAccordionSection(
                                            INQUIRE_LINK_TEXT
                                        );
                                }}
                            />
                            <div className="collapse-title text-xl font-medium">
                                <p className="text-2xl">{INQUIRE_LINK_TEXT}</p>
                            </div>
                            <div className="collapse-content">
                                {openAccordionSection === INQUIRE_LINK_TEXT && (
                                    <p className="text-2xl">{INQUIRE_TEXT}</p>
                                )}
                            </div>
                        </div>
                        <div
                            id="experience"
                            className="collapse collapse-arrow overflow-visible border border-base-300"
                        >
                            <input
                                type="radio"
                                name="content-accordion"
                                onChange={function (event) {
                                    if (event.target.checked)
                                        setOpenAccordionSection(
                                            EXPERIENCE_LINK_TEXT
                                        );
                                }}
                            />
                            <div className="collapse-title text-xl font-medium">
                                <p className="text-2xl">
                                    {EXPERIENCE_LINK_TEXT}
                                </p>
                            </div>
                            <div className="collapse-content">
                                {openAccordionSection ===
                                    EXPERIENCE_LINK_TEXT && (
                                    <p className="pt-16 text-2xl">
                                        {EXPERIENCE_TEXT}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div
                            id="skills"
                            className="collapse collapse-arrow overflow-visible border border-base-300"
                        >
                            <input
                                type="radio"
                                name="content-accordion"
                                onChange={function (event) {
                                    if (event.target.checked)
                                        setOpenAccordionSection(
                                            SKILLS_LINK_TEXT
                                        );
                                }}
                            />
                            <div className="collapse-title text-xl font-medium">
                                <p className="text-2xl">{SKILLS_LINK_TEXT}</p>
                            </div>
                            <div className="collapse-content">
                                {openAccordionSection === SKILLS_LINK_TEXT && (
                                    <p className="pt-16 text-2xl">
                                        {SKILLS_TEXT}
                                    </p>
                                )}
                            </div>
                        </div>
                        {/* <p id="resume">Testing</p> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
