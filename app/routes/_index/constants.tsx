import { SkillBadges } from './skillsBadges';

export const MAIN_HEADING_TEXT = 'Justin Farrell';
export const MAIN_SUBHEADING_TEXT = 'Lead Software Engineer';
// About
export const ABOUT_LINK_TEXT = 'About Me';
export const INQUIRE_LINK_TEXT = 'Ask An AI About Me';
export const EXPERIENCE_LINK_TEXT = 'My Experience';
export const SKILLS_LINK_TEXT = 'My Skills';

export const ABOUT_TEST_ID = 'about-paragraph';
export const EXPERIENCE_TEST_ID = 'experience-section';

export const ABOUT_TEXT = (
    <div data-testid={ABOUT_TEST_ID}>
        <p className="pt-6 text-xl">
            My journey in programming began at 13, sparked by a love for game
            development. I started with C++{' '}
            <em>(a bold choice, even for the time)</em>, then moved on to C# for
            the Unity Engine. Although I enrolled in a Computer Science program
            at Florida Polytechnic University, I left one year before completion
            due to difficult financial issues within my family. Shortly after
            and in response to changes in the game development industry, I
            learned Javascript and TypeScript, which led me into software
            engineering.
        </p>
        <p className="pt-6 text-xl">
            I am currently employed as a <strong>Lead Software Engineer</strong>{' '}
            at Intellibus, where I consult with many diverse teams to improve
            their developer experiences using a special mix of AI and efficiency
            enhancements. During this role, I regularly communicate with other
            leads (as well as Scrum Masters, SDETs and SWEs) to identify common
            pain points and resolve them as efficiently as possible. I feel very
            fortunate to be able to work to improve something I am so passionate
            about - <strong>the developer experience</strong>!
        </p>
        <p className="pt-6 text-xl">
            Despite being a Lead Software Engineer (and being extremely happy in
            my role), I am still open to <strong>contract opportunities</strong>
            ! I am laser-focused on creating reliable software and am a massive
            proponent of almost all kinds of software testing - if you believe
            your company has similar values, feel free to reach out to me at{' '}
            <a
                href="mailto:justinfarrellwebdev@gmail.com"
                className="text-primary"
                target="_blank"
                rel="noreferrer"
            >
                my email here.
            </a>
        </p>
        <p className="pt-6 text-xl">
            Outside of work, I enjoy traveling and have visited over 15 states.
            Some of my favorite places include the Parthenon in Nashville, TN,
            the Savannah River Rapids Park in Augusta, GA and, as an amusement
            park enthusiast, Carowinds in Charlotte, NC!
        </p>
        <p className="pt-6 text-xl">
            Stay tuned - this site is still under construction! Still, feel free
            to reach out to me at{' '}
            <a
                href="mailto:justinfarrellwebdev@gmail.com"
                className="text-primary"
                target="_blank"
                rel="noreferrer"
            >
                my email here
            </a>{' '}
            or my{' '}
            <a
                href="https://www.linkedin.com/in/justin-farrell-853267154/"
                className="text-primary"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn here!
            </a>
        </p>
        <p className="pt-6 text-xl">
            This site is also{' '}
            <a
                href="https://github.com/justinfarrelldev/justinfarrell"
                className="text-primary"
                target="_blank"
                rel="noreferrer"
            >
                open-source
            </a>
            , so you can peek behind the curtains!
        </p>
    </div>
);

export const EXPERIENCE_TEXT = (
    <div data-testid={EXPERIENCE_TEST_ID}>
        <table className="table">
            <tr
                className="hover cursor-pointer"
                onClick={() => {
                    window.open('https://www.asklightcast.io', '_blank');
                }}
            >
                <td className="pl-0 align-top">
                    <p className="text-lg text-secondary">
                        August 2023 - April 2024
                    </p>
                </td>
                <td className="align-top">
                    <p className="text-xl font-bold">
                        Full-Stack Software Engineer
                    </p>
                    <p className="text-lg">
                        Lightcast <em>(Phantom Team - Ask Lightcast)</em>
                    </p>
                </td>
            </tr>
            <tr
                className="hover cursor-pointer"
                onClick={() => {
                    window.open(
                        'https://lightcast.io/solutions/economic-and-workforce-development/skillfit',
                        '_blank'
                    );
                }}
            >
                <td className="pl-0 align-top">
                    <p className="text-lg text-secondary">
                        November 2022 - August 2023
                    </p>
                </td>
                <td className="align-top">
                    <p className="text-xl font-bold">
                        Full-Stack Software Engineer
                    </p>
                    <p className="text-lg">
                        Lightcast <em>(SkillFit Team - SkillFit)</em>
                    </p>
                </td>
            </tr>
            <tr
                className="hover cursor-pointer"
                onClick={() => {
                    window.open('https://www.kalosflorida.com/', '_blank');
                }}
            >
                <td className="pl-0 align-top">
                    <p className="text-lg text-secondary">
                        November 2021 - July 2022
                    </p>
                </td>
                <td className="align-top">
                    <p className="text-xl font-bold">Software Engineer</p>
                    <p className="text-lg">Kalos Services, Inc.</p>
                </td>
            </tr>
        </table>
    </div>
);

export const SKILLS_TEXT = (
    <>
        <SkillBadges />
    </>
);

// Resume
export const RESUME_LINK_TEXT = 'Résumé';
