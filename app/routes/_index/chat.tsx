import { Form } from '@remix-run/react';
import { Message } from './route';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { marked } from 'marked';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

type Props = {
    onUserMessage: (messageContent: string) => any;
    messages: Message[];
};

export const Chat = ({ onUserMessage, messages }: Props) => {
    const [inputValue, setInputValue] = useState<string>('');
    return (
        <>
            <p className="text-sm">
                This feature lets you chat with an AI to learn more about my
                professional background. <br />
                <br />
                It leverages the OpenAI API to generate customized responses
                tailored to the questions you ask and you can verify that{' '}
                <a
                    href="https://github.com/justinfarrelldev/justinfarrell"
                    target="_blank"
                    rel="noreferrer"
                >
                    here (as this site is open-source).
                </a>
                <br />
                <br />
                Please note that AIs{' '}
                <strong>
                    may occasionally generate inaccurate information
                </strong>
                . If you need more details, feel free to email me at{' '}
                <a
                    href="mailto:justinfarrellwebdev@gmail.com"
                    className="text-white"
                    target="_blank"
                    rel="noreferrer"
                >
                    justinfarrellwebdev@gmail.com
                </a>
                .
            </p>

            {messages.map((message, index) => {
                if (message.role === 'llm') {
                    return (
                        <motion.div
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                            className="chat chat-start"
                            key={index}
                        >
                            <div className="chat-bubble chat-bubble-primary text-lg">
                                {parse(
                                    DOMPurify.sanitize(
                                        marked.parse(message.message) as string
                                    )
                                )}
                            </div>
                        </motion.div>
                    );
                } else if (message.role === 'user') {
                    return (
                        <motion.div
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                            className="chat chat-end"
                            key={index}
                        >
                            <div className="chat-bubble chat-bubble-secondary text-lg">
                                {message.message}
                            </div>
                        </motion.div>
                    );
                }
            })}

            {messages.length > 0 &&
                messages[messages.length - 1].role === 'user' && (
                    <span className="loading loading-bars loading-md"></span>
                )}

            <Form
                method="POST"
                onSubmit={(event) => {
                    const formData = new FormData(event.currentTarget); // Access the form data

                    if (formData.get('userInput')) {
                        onUserMessage(formData.get('userInput')!.toString());
                    }
                    setInputValue('');
                }}
            >
                <input
                    name="userInput"
                    type="text"
                    placeholder="Ask About Me"
                    className="input input-bordered input-secondary my-4 w-full"
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }}
                    value={inputValue}
                />
            </Form>
        </>
    );
};
