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
