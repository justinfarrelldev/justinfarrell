import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import {
    ABOUT_LINK_TEXT,
    ABOUT_TEXT,
    EXPERIENCE_LINK_TEXT,
    EXPERIENCE_TEXT,
    INQUIRE_LINK_TEXT,
    MAIN_HEADING_TEXT,
    MAIN_SUBHEADING_TEXT,
    SKILLS_LINK_TEXT,
    SKILLS_TEXT,
} from './constants';
import { memo, useEffect, useState } from 'react';
import { useActionData, useLocation } from '@remix-run/react';
import OpenAI from 'openai';
import { Chat } from './chat';
import { wrapWithPrompt } from '~/utils/prompts';
import { Accordion } from './accordion';
import { motion } from 'framer-motion';
import { log } from '~/utils/logging';
import { loadFull } from 'tsparticles'; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { initParticlesEngine, Particles } from '@tsparticles/react';
import { Container } from 'node_modules/@tsparticles/engine/types/export-types';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export type Message = {
    role: 'user' | 'llm';
    message: string;
};

export const meta: MetaFunction = function () {
    return [
        { title: 'Justin Farrell' },
        {
            name: 'description',
            content:
                'Senior Software Engineer specializing in React, TypeScript, and AI integration.',
        },
    ];
};

export async function action({
    request,
}: ActionFunctionArgs): Promise<Message> {
    const body = await request.formData();
    const userInput = body.get('userInput');
    if (!userInput) {
        throw new Error(`No user input found!`);
    }

    const initialTimestamp = new Date().getTime();
    const completion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: wrapWithPrompt(userInput.toString()) },
        ],
        model: 'gpt-4',
        temperature: 0.2,
    });

    log(
        'info',
        `[${initialTimestamp}] User question: "${userInput.toString()}". The LLM responded with the following response: "${completion.choices[0].message.content!}"`
    );

    return { role: 'llm', message: completion.choices[0].message.content! };
}

function determineInitialSection(hash: string): string {
    const noHash = hash.replaceAll('#', '');

    switch (noHash) {
        case 'about': {
            return ABOUT_LINK_TEXT;
        }
        case 'inquire': {
            return INQUIRE_LINK_TEXT;
        }
        case 'experience': {
            return EXPERIENCE_LINK_TEXT;
        }
        case 'skills': {
            return SKILLS_LINK_TEXT;
        }
        default: {
            return ABOUT_LINK_TEXT;
        }
    }
}

const ParticleComponent = function ({
    particlesLoaded,
}: {
    particlesLoaded: (container: Container | undefined) => any;
}) {
    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            style={{ zIndex: 10 }}
            options={{
                background: {
                    color: {
                        value: '#000',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true as any,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#ffffff',
                    },
                    links: {
                        color: '#ffffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            // @ts-expect-error This error is actually valid
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

const particlesLoaded = async function (container: Container | undefined) {
    console.log(container);
};

const MemoizedParticleComponent = memo(ParticleComponent);

export default function Index() {
    const location = useLocation();
    // have to use state because DaisyUI only sets the display property for some reason
    const [openAccordionSection, setOpenAccordionSection] = useState<
        string | null
    >(determineInitialSection(location.hash));
    const [messages, setMessages] = useState<Message[]>([]);
    const data = useActionData<typeof action>();

    useEffect(
        function () {
            if (data)
                setMessages([
                    ...messages,
                    { role: 'llm', message: data!.message },
                ]);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data]
    );

    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(function () {
        initParticlesEngine(async function (engine) {
            await loadFull(engine);
        }).then(function () {
            setInit(true);
        });
    }, []);

    console.log('open accordion section: ', openAccordionSection);

    console.log('Hash: ', location.hash);

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
            {init && (
                <MemoizedParticleComponent particlesLoaded={particlesLoaded} />
            )}

            <section className="relative z-50">
                <div className="join join-vertical lg:fixed">
                    <motion.h1
                        className="text-6xl font-bold"
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 100, x: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                    >
                        {MAIN_HEADING_TEXT}
                    </motion.h1>
                    <motion.p
                        className="pt-5 text-2xl"
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 100, x: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                    >
                        {MAIN_SUBHEADING_TEXT}
                    </motion.p>
                    <motion.a
                        href="/#about"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 100, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="no-underline"
                    >
                        <p className="pt-16 text-xl text-primary">
                            {ABOUT_LINK_TEXT}
                        </p>
                    </motion.a>
                    <motion.a
                        href="/#inquire"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 100, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="no-underline"
                    >
                        <p className="text-xl text-primary">
                            {INQUIRE_LINK_TEXT}
                        </p>
                    </motion.a>
                    <motion.a
                        href="/#experience"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 100, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="no-underline"
                    >
                        <p className="text-xl text-primary">
                            {EXPERIENCE_LINK_TEXT}
                        </p>
                    </motion.a>
                    <motion.a
                        href="/#skills"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 100, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                        className="no-underline"
                    >
                        <p className="text-xl text-primary">
                            {SKILLS_LINK_TEXT}
                        </p>
                    </motion.a>
                </div>
                <div className="grid h-screen lg:grid-cols-2">
                    <div>
                        {/* This div is empty to push the other column over */}
                    </div>
                    <Accordion
                        defaultOpenUniqueId={location.hash.replaceAll('#', '')}
                        sections={[
                            {
                                uniqueId: 'about',
                                header: ABOUT_LINK_TEXT,
                                content: ABOUT_TEXT,
                                onOpen: function () {
                                    setOpenAccordionSection(ABOUT_LINK_TEXT);
                                },
                                onClose: function () {
                                    setOpenAccordionSection(null);
                                },
                                isOpen:
                                    openAccordionSection === ABOUT_LINK_TEXT,
                            },
                            {
                                uniqueId: 'inquire',
                                header: INQUIRE_LINK_TEXT,
                                content: (
                                    <Chat
                                        onUserMessage={function (userMessage) {
                                            setMessages([
                                                ...messages,
                                                {
                                                    role: 'user',
                                                    message: userMessage,
                                                },
                                            ]);
                                        }}
                                        messages={messages}
                                    />
                                ),
                                onOpen: function () {
                                    setOpenAccordionSection(INQUIRE_LINK_TEXT);
                                },
                                onClose: function () {
                                    setOpenAccordionSection(null);
                                },
                                isOpen:
                                    openAccordionSection === INQUIRE_LINK_TEXT,
                            },
                            {
                                uniqueId: 'experience',
                                header: EXPERIENCE_LINK_TEXT,
                                content: EXPERIENCE_TEXT,
                                onOpen: function () {
                                    setOpenAccordionSection(
                                        EXPERIENCE_LINK_TEXT
                                    );
                                },
                                onClose: function () {
                                    setOpenAccordionSection(null);
                                },
                                isOpen:
                                    openAccordionSection ===
                                    EXPERIENCE_LINK_TEXT,
                            },
                            {
                                uniqueId: 'skills',
                                header: SKILLS_LINK_TEXT,
                                content: SKILLS_TEXT,
                                onOpen: function () {
                                    setOpenAccordionSection(SKILLS_LINK_TEXT);
                                },
                                onClose: function () {
                                    setOpenAccordionSection(null);
                                },
                                isOpen:
                                    openAccordionSection === SKILLS_LINK_TEXT,
                            },
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}
