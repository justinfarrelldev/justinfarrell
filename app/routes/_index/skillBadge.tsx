import React, { FC } from 'react';

export type Skill = {
    name: string;
    achievements: string[];
};

type Props = {
    skill: Skill;
};

export const SkillBadge: FC<Props> = function ({
    skill,
}: Props): React.ReactElement {
    return (
        <div className=" relative inline-block">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className="has-tooltip badge badge-success">
                {skill.name}{' '}
                <span className="tooltip bottom-full w-52 rounded bg-success p-1 text-left">
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
