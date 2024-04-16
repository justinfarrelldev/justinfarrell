import React, { FC } from 'react';

export type Skill = {
    name: string;
    achievements: string[];
};

type Props = {
    skill: Skill;
    confidence: 'expert' | 'confident' | 'not-confident';
};

export const SkillBadge: FC<Props> = function ({
    skill,
    confidence,
}: Props): React.ReactElement {
    // This might be a little sloppy, but it gives the intended effect and I'm too tired this morning to really worry!
    // I am aware there are better ways and that DRY is being criminally violated here...
    let badgeClass: string;
    let tooltipClass: string;
    if (confidence === 'expert') {
        badgeClass = 'has-tooltip badge badge-success mr-2';
        tooltipClass =
            'tooltip bottom-full w-52 rounded bg-success p-1 text-left';
    } else if (confidence === 'confident') {
        badgeClass = 'has-tooltip badge badge-warning mr-2';
        tooltipClass =
            'tooltip bottom-full w-52 rounded bg-warning p-1 text-left';
    } else {
        badgeClass = 'has-tooltip badge badge-error mr-2';
        tooltipClass =
            'tooltip bottom-full w-52 rounded bg-error p-1 text-left';
    }
    return (
        <div className=" relative inline-block">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className={badgeClass}>
                {skill.name}{' '}
                <span className={tooltipClass}>
                    <ul className="list-inside list-disc p-4">
                        <p className="text-lg font-bold">{skill.name}</p>
                        {skill.achievements.map(function (achievement) {
                            return (
                                <li
                                    key={achievement}
                                    className="mb-2 text-sm font-semibold"
                                >
                                    {achievement}
                                </li>
                            );
                        })}
                    </ul>
                </span>
            </div>
        </div>
    );
};
