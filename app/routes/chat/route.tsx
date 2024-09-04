import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { useEffect, useState } from 'react';
import { useActionData } from '@remix-run/react';
import OpenAI from 'openai';
import { Chat } from '../_index/chat';
import { wrapWithPrompt } from '~/utils/prompts';
import { HomeIcon } from './homeIcon';
import { log } from '~/utils/logging';
import { MAIN_PAGE_TITLE } from '~/constants/metadata';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export type Message = {
    role: 'user' | 'llm';
    message: string;
};

export const meta: MetaFunction = () => [
    { title: MAIN_PAGE_TITLE },
    {
        name: 'description',
        content:
            'Senior Software Engineer specializing in React, TypeScript, and AI integration.',
    },
];

export const action = async ({
    request,
}: ActionFunctionArgs): Promise<Message> => {
    const body = await request.formData();
    const userInput = body.get('userInput');
    if (!userInput) {
        throw new Error(`No user input found!`);
    }

    const initialTimestamp = new Date().getTime();

    log(
        'info',
        `[${initialTimestamp}] A user asked the LLM this question: `,
        userInput.toString()
    );

    const completion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: wrapWithPrompt(userInput.toString()) },
        ],
        model: 'gpt-4',
        temperature: 0.2,
    });

    log(
        'info',
        `[${initialTimestamp}] The LLM responded with the following response: `,
        completion.choices[0].message.content!
    );

    return { role: 'llm', message: completion.choices[0].message.content! };
};

const Index = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const data = useActionData<typeof action>();

    useEffect(
        () => {
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
            <a href="/">
                <HomeIcon />
            </a>
            <Chat
                onUserMessage={(userMessage) => {
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
        </div>
    );
};

export default Index;
