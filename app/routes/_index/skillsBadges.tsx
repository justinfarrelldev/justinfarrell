import React, { FC, useState } from 'react';
import { Skill, SkillBadge } from './skillBadge';
import { Alert } from './alert';

export const badgeArray: React.JSX.Element[] = [
    <SkillBadge
        key="React.js"
        skill={{
            name: 'React.js',
            achievements: [
                'Utilized React at Kalos Services, Inc. for the internal company front-end',
                'Used React on the SkillFit Team at Lightcast to create the SkillFit product',
                'Used React on the Phantom Team at Lightcast to create Ask Lightcast, our business-facing AI product',
                'This site uses React.js with the Remix framework',
                'Passed the LinkedIn Skills Assessment',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key=".NET"
        skill={{
            name: '.NET',
            achievements: [
                'Utilized C# on the Unity Engine for game development to create multiple games',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="C++"
        skill={{
            name: 'C++',
            achievements: [
                'Used C++ to create a very basic encryption algorithm in university',
            ],
        }}
        confidence="not-confident"
    />,
    <SkillBadge
        key="C"
        skill={{
            name: 'C',
            achievements: [
                'Used C for university projects and got the basics down pat (and learned how to use Nano while I was at it)',
            ],
        }}
        confidence="not-confident"
    />,
    <SkillBadge
        key="Next.js"
        skill={{
            name: 'Next.js',
            achievements: [
                'Used Next.js with the app router on the Phantom Team at Lightcast to create Ask Lightcast, our business-facing AI product',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Node.js"
        skill={{
            name: 'Node.js',
            achievements: [
                'Used Node.js in combination with React at Kalos Services, Inc.',
                'Hosted an algorithmic trading bot created with Node.js on Fly.io',
                'Have created multiple Express.js APIs using Node.js',
                'Utilized Node.js in combination with React at Lightcast for both SkillFit and Ask Lightcast',
                'This site uses Node.js with the Remix framework',
                'Created a Trello organization Slack bot (hosted on AWS) for Kalos Services, Inc.',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Typescript"
        skill={{
            name: 'Typescript',
            achievements: [
                'Have used Typescript at Kalos Services, Inc. as well as both teams at Lightcast',
                'Used Typescript extensively during the creation of an algorithmic trading bot',
                'Typescript is used extensively for this site',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Javascript"
        skill={{
            name: 'Javascript',
            achievements: [
                'Javascript has been used throughout most of the projects I have worked on or created',
                'I strongly prefer starting projects with Typescript rather than plain Javascript due to type-safety',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Go"
        skill={{
            name: 'Go',
            achievements: [
                'Go is the main backend language used at Kalos Services, Inc.',
                'Extensive experience creating and maintaining a gRPC API using Go and protobuffers (protoc-gen-go) at Kalos Services, Inc.',
                'Utilizing Go with protobuffers to write a custom game server for the Call to Power series of games',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="MySQL"
        skill={{
            name: 'MySQL',
            achievements: [
                'MySQL is the main database query language used at Kalos Services, Inc.',
                'Used Sequel Ace and DBeaver to access the database as well as SSH',
                'I prefer to use PostgreSQL when possible as MySQL has a lot of pain points which Postgres mitigates',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="PostgreSQL"
        skill={{
            name: 'PostgreSQL',
            achievements: [
                'Postgres is the main database choice for Ask Lightcast',
                'Used Postgres on AWS RDS for blog posts on my old blog site, wayoftheweb.net',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Remix"
        skill={{
            name: 'Remix',
            achievements: [
                'Remix is the framework used to create this website!',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="AWS"
        skill={{
            name: 'AWS',
            achievements: [
                'Amazon Web Services was used as the cloud provider for Kalos Services, Inc.',
                'Created an automatic prod -> dev DMS task for Kalos Services, Inc. which scrubbed out PII and provided us a close-to-production development environment every week',
                'Created a new RDS cluster to help spin up the BeyondHQ project at Lightcast',
                'Spun up an ECS Fargate cluster to help re-construct the BeyondHQ project at Lightcast',
                'Created and managed multiple bastion-host EC2 instances for Kalos Services, Inc.',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Fly.io"
        skill={{
            name: 'Fly.io',
            achievements: [
                'Deployed a Node.js-based algorithmic trading bot to Fly.io',
                'Set up Sentry on Fly.io for the algorithmic trading bot so that I could monitor uptime',
                'This site is deployed using Fly.io!',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Electron"
        skill={{
            name: 'Electron',
            achievements: [
                'In the process of creating a modification manager for the Call to Power series of games using Electron (specifically, Electron Forge',
                'Familiar with the concepts behind Inter-Process Communication (IPC) as well as preloads and context bridges',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Tailwind"
        skill={{
            name: 'Tailwind',
            achievements: [
                'Tailwind is utilized extensively in this site (especially in this popup!)',
                'DaisyUI is used for this site',
                'Have used ShadCN UI at Lightcast for the initial prototypes of Ask Lightcast',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Python"
        skill={{
            name: 'Python',
            achievements: [
                'Made heavy use of Python and Django within the BeyondHQ Project at Lightcast',
                'Created a speech-recognition-capable personal assistant for my Raspberry PI',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Django"
        skill={{
            name: 'Django',
            achievements: [
                'Made heavy use of Python and Django within the BeyondHQ Project at Lightcast',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Terraform"
        skill={{
            name: 'Terraform',
            achievements: ['Wrote Terraform code for BeyondHQ at Lightcast'],
        }}
        confidence="not-confident"
    />,
    <SkillBadge
        key="gRPC"
        skill={{
            name: 'gRPC',
            achievements: [
                'Created and maintained endpoints for a gRPC backend at Kalos Services, Inc.',
                'Currently working to create a Call to Power game server using gRPC, gRPC Gateway, protobuffers and Go',
                'Make heavy use of gRPCurl for debugging',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="GitHub Actions"
        skill={{
            name: 'GitHub Actions',
            achievements: [
                'Created an algorithmic trading bot deployed to a Fly.io server via GitHub Actions for CI / CD',
                'This site uses GitHub Actions for continuous integration and deployment!',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="GitLab CI"
        skill={{
            name: 'GitLab CI',
            achievements: [
                'GitLab is used in all Lightcast apps for CI / CD and I have been hands-on with GitLab CI on both the SkillFit and Ask Lightcast projects',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="CircleCI"
        skill={{
            name: 'CircleCI',
            achievements: [
                'CircleCI was utilized for CI / CD at Kalos Services, Inc., where I was involved extensively in crafting new deployments',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Vite"
        skill={{
            name: 'Vite',
            achievements: [
                'Vite is the bundler used in the development of this website',
                'I have used Vite extensively in the past (it is my bundler of choice)',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Webpack"
        skill={{
            name: 'Webpack',
            achievements: [
                'Webpack is used for the Ask Lightcast site',
                'Webpack was used for the SkillFit site',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="ChatGPT API"
        skill={{
            name: 'ChatGPT API',
            achievements: [
                'The ChatGPT API is utilized often for auxiliary calls within the Ask Lightcast site (many of which I have constructed the prompt for)',
                'The ChatGPT API is used heavily on this site',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Vitest"
        skill={{
            name: 'Vitest',
            achievements: [
                'I created the unit and integration testing processes for Ask Lightcast (both unit and integration tests utilized Vitest)',
                'I presented a tech-talk comparing the pros-and-cons of Vitest, Jest and Mocha within Lightcast (including extensive performance comparisons)',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Jest"
        skill={{
            name: 'Jest',
            achievements: [
                'I created the unit and integration testing processes for SkillFit (both unit and integration tests utilized Jest in the form of TS-Jest)',
                'I presented a tech-talk comparing the pros-and-cons of Vitest, Jest and Mocha within Lightcast (including extensive performance comparisons)',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Mocha"
        skill={{
            name: 'Mocha',
            achievements: [
                'I presented a tech-talk comparing the pros-and-cons of Vitest, Jest and Mocha within Lightcast (including extensive performance comparisons)',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Playwright"
        skill={{
            name: 'Playwright',
            achievements: [
                "I chose Playwright when creating the end-to-end (E2E) testing suite for Ask Lightcast due to Playwright's extensibility, ease-of-use and multiple-browser testing features",
                'Utilized Playwright for web scraping during prototyping of an algorithmic trading bot',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Puppeteer"
        skill={{
            name: 'Puppeteer',
            achievements: [
                'I chose Puppeteer when creating the end-to-end (E2E) testing suite for SkillFit due to its wide usage throughout the industry',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Jira"
        skill={{
            name: 'Jira',
            achievements: [
                'Jira was utilized heavily during my time at Lightcast, including in the SkillFit, BeyondHQ and Ask Lightcast projects',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Confluence"
        skill={{
            name: 'Confluence',
            achievements: [
                'Confluence was utilized heavily during my time at Lightcast, including in the SkillFit, BeyondHQ and Ask Lightcast projects',
                'I created countless pages of documentation within Confluence for all of the projects I worked on',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Git"
        skill={{
            name: 'Git',
            achievements: [
                'I have utilized Git extensively through the years - both on the command-line and through various GUI tools',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Vercel"
        skill={{
            name: 'Vercel',
            achievements: [
                'I have used Vercel extensively, both during my work on the Ask Lightcast project as well as during development of this site (which was eventually pivoted to Fly.io)',
            ],
        }}
        confidence="expert"
    />,
    <SkillBadge
        key="Docker"
        skill={{
            name: 'Docker',
            achievements: [
                'I have used Docker for various containerization flows, including deploying the BeyondHQ project to AWS ECS Fargate and deploying this site',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Unity Engine"
        skill={{
            name: 'Unity Engine',
            achievements: [
                'I utilized Unity to create an in-depth space-shooter game for Windows as well as a block-stacking WebGL game',
                'I am familiar with both the Unity High-Definition Render Pipeline (HDRP) as well as the Universal Render Pipeline (URP)',
                'Very familiar with C# for Unity development (GameObject, PlayerPrefs, serialization and de-serialization, etc.)',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Framer Motion"
        skill={{
            name: 'Framer Motion',
            achievements: [
                'Introduced Phantom Team at Lightcast to Framer Motion and added it to both SkillFit and Ask Lightcast',
                'Framer Motion is used for animations on this site',
            ],
        }}
        confidence="expert"
    />,
].sort(function (a, b) {
    const confidenceOrder = { expert: 0, confident: 1, 'not-confident': 2 };
    const confidenceA: 'expert' | 'confident' | 'not-confident' =
        a.props.confidence;
    const confidenceB: 'expert' | 'confident' | 'not-confident' =
        b.props.confidence;

    if (confidenceOrder[confidenceA] < confidenceOrder[confidenceB]) {
        return -1;
    } else if (confidenceOrder[confidenceA] > confidenceOrder[confidenceB]) {
        return 1;
    } else {
        return 0;
    }
});

export const SkillBadges: FC = function () {
    const [searchText, setSearchText] = useState<string>();
    return (
        <>
            <Alert
                text="Pardon the dust - this section is still under active
                construction! This is also not an exhaustive list of my skill
                set as of right now, but hopefully it will be soon!"
            />
            <input
                type="text"
                placeholder="Search for a skill"
                className="input input-bordered input-secondary my-4 w-full"
                onChange={function (event) {
                    setSearchText(event.target.value);
                }}
            />
            {badgeArray.filter(function (badge) {
                if (searchText === '' || searchText === undefined) return true;

                if (
                    (badge.props.skill as Skill).name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                )
                    return true;

                const achievements = (badge.props.skill as Skill).achievements;

                for (const achievement of achievements) {
                    if (
                        achievement
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                    )
                        return true;
                }

                return false;
            })}
        </>
    );
};
