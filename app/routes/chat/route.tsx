import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { useEffect, useState } from 'react';
import { useActionData } from '@remix-run/react';
import OpenAI from 'openai';
import { Chat } from '../_index/chat';
import { wrapWithPrompt } from '~/utils/prompts';
import { HomeIcon } from './homeIcon';

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
            <a href="/">
                <HomeIcon />
            </a>
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
        </div>
    );
}
