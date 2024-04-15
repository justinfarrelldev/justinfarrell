export const MAIN_HEADING_TEXT = 'Justin Farrell';
export const MAIN_SUBHEADING_TEXT = 'Full-Stack Engineer';
// About
export const ABOUT_LINK_TEXT = 'About Me';
export const EXPERIENCE_LINK_TEXT = 'My Experience';
export const SKILLS_LINK_TEXT = 'My Skills';
export const ABOUT_TEXT = (
    <>
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
            Currently, I am a Software Engineer at Lightcast on the Phantom Team
            (working on the{' '}
            <a
                href="https://www.asklightcast.io"
                className="text-primary"
                target="_blank"
                rel="noreferrer"
            >
                new AI project, Ask Lightcast
            </a>
            ), where I explore and create new possibilities with AI. I am
            laser-focused on creating reliable software and am a massive
            proponent of almost all kinds of software testing.
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
    </>
);

export const EXPERIENCE_TEXT = (
    <>
        <h2>My Experience</h2>
        <table className="table">
            <tr
                className="hover cursor-pointer"
                onClick={function () {
                    window.open('https://www.asklightcast.io', '_blank');
                }}
            >
                <td className="pl-0 align-top">
                    <p className="text-lg text-secondary">
                        August 2023 - Present
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
                onClick={function () {
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
                onClick={function () {
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
    </>
);

export const SKILLS_TEXT = (
    <>
        <h2>My Skills</h2>
    </>
);

// Resume
export const RESUME_LINK_TEXT = 'Résumé';
