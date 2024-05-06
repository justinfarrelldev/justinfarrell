import { FC } from 'react';

type Section = {
    uniqueId: string;
    header: string;
    content: JSX.Element;
    onOpen: () => any;
    isOpen: boolean;
};

type Props = {
    sections: Section[];
    defaultOpenUniqueId: string;
};

export const Accordion: FC<Props> = function ({
    sections,
    defaultOpenUniqueId,
}: Props) {
    return (
        <div>
            {sections.map(function (section) {
                return (
                    <div
                        key={section.uniqueId}
                        id={section.uniqueId}
                        className="collapse collapse-arrow overflow-visible border border-base-300 "
                    >
                        <input
                            type="radio"
                            name="content-accordion"
                            defaultChecked={
                                section.uniqueId === defaultOpenUniqueId
                            }
                            onChange={function (event) {
                                if (event.target.checked) section.onOpen();
                            }}
                        />
                        <div className="collapse-title text-xl font-medium">
                            <p className="text-2xl">{section.header}</p>
                        </div>
                        <div className="collapse-content">
                            {section.isOpen && (
                                <p className="text-2xl">{section.content}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
