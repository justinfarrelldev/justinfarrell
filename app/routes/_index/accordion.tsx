import { motion } from 'framer-motion';
import { FC } from 'react';

type Section = {
    uniqueId: string;
    header: string;
    content: JSX.Element;
    onOpen: () => any;
    isOpen: boolean;
    onClose: () => any;
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
            {sections.map(function (section, index) {
                return (
                    <motion.div
                        key={section.uniqueId}
                        id={section.uniqueId}
                        className="collapse collapse-arrow overflow-visible border border-base-300 "
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 100, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.25 }}
                    >
                        <input
                            type="radio"
                            name="content-accordion"
                            className="cursor-pointer"
                            defaultChecked={
                                section.uniqueId === defaultOpenUniqueId
                            }
                            onChange={function (event) {
                                console.log('Input fired');
                                if (event.target.checked) {
                                    section.onOpen();
                                    document.location = `#${section.uniqueId}`;
                                }
                            }}
                            onClick={function () {
                                if (section.isOpen) {
                                    section.onClose();
                                } else {
                                    section.onOpen();
                                }
                            }}
                        />
                        <div className="collapse-title text-xl font-medium">
                            <p className="text-2xl">{section.header}</p>
                        </div>
                        {section.isOpen && (
                            <div className="collapse-content">
                                {section.isOpen && (
                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.25 }}
                                        className="text-2xl"
                                    >
                                        {section.content}
                                    </motion.p>
                                )}
                            </div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};
