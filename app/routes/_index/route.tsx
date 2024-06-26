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
import { useEffect, useState } from 'react';
import { useActionData } from '@remix-run/react';
import OpenAI from 'openai';
import { Chat } from './chat';
import { wrapWithPrompt } from '~/utils/prompts';
import { Accordion } from './accordion';

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
            name: 'Justin Farrell - Software Engineer - Home',
            content:
                'Crafting Code Excellence: Full-Stack Mastery in JavaScript',
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

    const completion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: wrapWithPrompt(userInput.toString()) },
        ],
        model: 'gpt-4',
        temperature: 0.2,
    });

    return { role: 'llm', message: completion.choices[0].message.content! };
}

export default function Index() {
    // have to use state because DaisyUI only sets the display property for some reason
    const [openAccordionSection, setOpenAccordionSection] =
        useState<string>(ABOUT_LINK_TEXT);
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

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
            <section>
                <div className="join join-vertical lg:fixed">
                    <h1 className="text-6xl font-bold">{MAIN_HEADING_TEXT}</h1>
                    <p className="pt-5 text-2xl">{MAIN_SUBHEADING_TEXT}</p>
                    <a href="/#about">
                        <p className="pt-16 text-xl text-primary">
                            {ABOUT_LINK_TEXT}
                        </p>
                    </a>
                    <a href="/#inquire">
                        <p className="text-xl text-primary">
                            {INQUIRE_LINK_TEXT}
                        </p>
                    </a>
                    <a href="/#experience">
                        <p className="text-xl text-primary">
                            {EXPERIENCE_LINK_TEXT}
                        </p>
                    </a>
                    <a href="/#skills">
                        <p className="text-xl text-primary">
                            {SKILLS_LINK_TEXT}
                        </p>
                    </a>
                    {/* <a href="/#resume">
                        <p className="text-xl">{RESUME_LINK_TEXT}</p>
                    </a> */}
                </div>
                <div className="grid h-screen lg:grid-cols-2">
                    <div>
                        {/* This div is empty to push the other column over */}
                    </div>
                    <Accordion
                        defaultOpenUniqueId="about"
                        sections={[
                            {
                                uniqueId: 'about',
                                header: ABOUT_LINK_TEXT,
                                content: ABOUT_TEXT,
                                onOpen: function () {
                                    setOpenAccordionSection(ABOUT_LINK_TEXT);
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
