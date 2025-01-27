import React, { FC, useState } from 'react';
import { Skill, SkillBadge } from './skillBadge';
import { motion } from 'framer-motion';

// I'm aware that this is cluttered, but I am prioritizing development time over complete clarity in this moment
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
        confidence="very-confident"
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
                'Utilizing Go to write a custom game server for the Call to Power series of games',
            ],
        }}
        confidence="very-confident"
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
        confidence="very-confident"
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
                'Amazon Web Services was used as the cloud provider of choice for both Kalos Services Inc. as well as Lightcast (both teams)',
            ],
        }}
        confidence="very-confident"
    />,
    <SkillBadge
        key="AWS DMS"
        skill={{
            name: 'AWS DMS',
            achievements: [
                'Created an automatic prod -> dev DMS task for Kalos Services, Inc. which scrubbed out PII and provided us a close-to-production development environment every week',
            ],
        }}
        confidence="very-confident"
    />,
    <SkillBadge
        key="AWS ECS"
        skill={{
            name: 'AWS ECS',
            achievements: [
                'Spun up an ECS Fargate cluster to help re-construct the BeyondHQ project at Lightcast',
                'Spun up multiple ECS EC2 clusters for my previous personal website, wayoftheweb.net',
            ],
        }}
        confidence="very-confident"
    />,
    <SkillBadge
        key="AWS RDS"
        skill={{
            name: 'AWS RDS',
            achievements: [
                'Created an automatic prod -> dev DMS task for our RDS databases at Kalos Services, Inc. which scrubbed out PII and provided us a close-to-production development environment every week',
                'Created a new RDS cluster to help spin up the BeyondHQ project at Lightcast',
            ],
        }}
        confidence="very-confident"
    />,
    <SkillBadge
        key="AWS S3"
        skill={{
            name: 'AWS S3',
            achievements: [
                'Used AWS S3 extensively at Kalos Services Inc. for storage of various documents',
            ],
        }}
        confidence="very-confident"
    />,
    <SkillBadge
        key="AWS EC2"
        skill={{
            name: 'AWS EC2',
            achievements: [
                'Created and managed multiple bastion-host EC2 instances for Kalos Services, Inc.',
                'Orchestrated multiple AWS ECS clusters with the EC2 preset (as well as the Fargate preset)',
            ],
        }}
        confidence="very-confident"
    />,
    <SkillBadge
        key="AWS API Gateway"
        skill={{
            name: 'AWS API Gateway',
            achievements: [
                'Used AWS Lambda functions extensively at SkillFit (orchestrated with AWS API Gateway) as our backend was fully serverless',
            ],
        }}
        confidence="very-confident"
    />,
    <SkillBadge
        key="AWS DynamoDB"
        skill={{
            name: 'AWS DynamoDB',
            achievements: [
                'Made extensive use of the NoSQL database AWS DynamoDB while on the SkillFit team at Lightcast',
            ],
        }}
        confidence="very-confident"
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
        confidence="very-confident"
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
        confidence="very-confident"
    />,
    <SkillBadge
        key="CircleCI"
        skill={{
            name: 'CircleCI',
            achievements: [
                'CircleCI was utilized for CI / CD at Kalos Services, Inc., where I was involved extensively in crafting new deployments',
            ],
        }}
        confidence="very-confident"
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
        confidence="very-confident"
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
        confidence="very-confident"
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
        confidence="very-confident"
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
        confidence="very-confident"
    />,
    <SkillBadge
        key="Puppeteer"
        skill={{
            name: 'Puppeteer',
            achievements: [
                'I chose Puppeteer when creating the end-to-end (E2E) testing suite for SkillFit due to its wide usage throughout the industry',
            ],
        }}
        confidence="very-confident"
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
        confidence="very-confident"
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
    <SkillBadge
        key="Effect"
        skill={{
            name: 'Effect',
            achievements: [
                'Utilizing Effect-TS on an in-progress project that I have not yet revealed to the world',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Effect Schema"
        skill={{
            name: 'Effect Schema',
            achievements: [
                'Utilizing Effect Schema as an alternative to Zod on an in-progress project that I have not yet revealed to the world',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="QuantConnect"
        skill={{
            name: 'QuantConnect',
            achievements: [
                'Using QuantConnect frequently for algorithmic trading and backtesting',
                'Have gotten the course certificate for the Udemy course "Python for Finance and Algorithmic Trading with QuantConnect" as seen on my LinkedIn profile',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Java"
        skill={{
            name: 'Java',
            achievements: [
                'Have consulted with various teams working in Java projects',
                'Used JavaFX for graphical apps in the past',
            ],
        }}
        confidence="confident"
    />,
    <SkillBadge
        key="Spring Boot"
        skill={{
            name: 'Spring Boot',
            achievements: [
                'Have consulted with a few teams using Spring Boot and done some basic projects in the past with Java and Spring Boot',
            ],
        }}
        confidence="not-confident"
    />,
    <SkillBadge
        key="Angular"
        skill={{
            name: 'Angular',
            achievements: [
                'Have consulted with a few teams using Angular and done some basic projects in the past using Angular 2 and RxJS',
            ],
        }}
        confidence="not-confident"
    />,
].sort((a, b) => {
    const confidenceOrder = {
        expert: 0,
        'very-confident': 1,
        confident: 2,
        'not-confident': 3,
    };
    const confidenceA:
        | 'expert'
        | 'very-confident'
        | 'confident'
        | 'not-confident' = a.props.confidence;
    const confidenceB:
        | 'expert'
        | 'very-confident'
        | 'confident'
        | 'not-confident' = b.props.confidence;

    if (confidenceOrder[confidenceA] < confidenceOrder[confidenceB]) {
        return -1;
    } else if (confidenceOrder[confidenceA] > confidenceOrder[confidenceB]) {
        return 1;
    } else {
        return 0;
    }
});

export const SkillBadges: FC = () => {
    const [searchText, setSearchText] = useState<string>();
    return (
        <>
            <input
                type="text"
                placeholder="Search for a skill"
                className="input input-bordered input-secondary my-4 w-full"
                onChange={(event) => {
                    setSearchText(event.target.value);
                }}
            />
            {screen && screen.width / screen.height < 1 ? (
                <p className="text-sm font-semibold italic">
                    Click on any of the skills to see my achievements with them
                </p>
            ) : (
                <p className="text-sm font-semibold italic">
                    Hover over any of the skills to see my achievements with
                    them
                </p>
            )}
            {badgeArray
                .filter((badge) => {
                    if (searchText === '' || searchText === undefined)
                        return true;

                    if (
                        (badge.props.skill as Skill).name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                    )
                        return true;

                    const achievements = (badge.props.skill as Skill)
                        .achievements;

                    for (const achievement of achievements) {
                        if (
                            achievement
                                .toLowerCase()
                                .includes(searchText.toLowerCase())
                        )
                            return true;
                    }

                    return false;
                })
                .map((badge, index) => {
                    return (
                        <motion.span
                            key={`${badge.key}-span`}
                            initial={{ opacity: 0, x: -25 }}
                            animate={{ opacity: 100, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.025 }}
                        >
                            {badge}
                        </motion.span>
                    );
                })}
            <p className="mt-12 text-base font-bold">Legend</p>
            <ul className="list-inside list-disc">
                <li className="list-item text-base text-success">
                    I am <strong>extremely proficient</strong> with this skill
                </li>
                <li className="list-item text-base text-warning">
                    I am <strong>confident</strong> in my ability with this
                    skill
                </li>
                <li className="list-item text-base text-error">
                    I <strong>have used</strong> this skill, but I am not
                    confident in my ability with it yet
                </li>
            </ul>
        </>
    );
};
