import React from 'react';
import { SkillBadge } from './skillBadge';

const badgeArray: React.JSX.Element[] = [
    <SkillBadge
        key="React.js"
        skill={{
            name: 'React.js',
            achievements: [
                'Utilized React at Kalos Services, Inc. for the internal company front-end',
                'Used React on the SkillFit Team at Lightcast to create the SkillFit product',
                'Currently use React on the Phantom Team at Lightcast to create Ask Lightcast, our business-facing AI product',
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
        key="Next.js"
        skill={{
            name: 'Next.js',
            achievements: [
                'Currently use Next.js on the Phantom Team at Lightcast to create Ask Lightcast, our business-facing AI product',
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
                'Remix is the main framework used to create this website!',
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

export const SKILLS_BADGES = <>{badgeArray}</>;
