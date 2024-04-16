import { SkillBadge } from './skillBadge';

export const SKILLS_BADGES = (
    <>
        <SkillBadge
            skill={{
                name: 'React.js',
                achievements: [
                    'Utilized React at Kalos Services, Inc. for the internal company front-end',
                    'Used React on the SkillFit Team at Lightcast to create the SkillFit product',
                    'Make use of React on the Phantom Team at Lightcast to create Ask Lightcast, our business-facing AI product',
                    'Passed the LinkedIn Skills Assessment',
                ],
            }}
            confidence="expert"
        />
        <SkillBadge
            skill={{
                name: 'Next.js',
                achievements: [
                    'Extensive experience with Next.js in a variety of contexts',
                    'Used to create Ask Lightcast (Phantom Team)',
                ],
            }}
            confidence="confident"
        />
    </>
);
