import { Form } from '@remix-run/react';
import { Message } from './route';
import { useState } from 'react';

type Props = {
    onUserMessage: (messageContent: string) => any;
    messages: Message[];
};

export function Chat({ onUserMessage, messages }: Props) {
    const [inputValue, setInputValue] = useState<string>('');
    return (
        <>
            {messages.map(function (message, index) {
                if (message.role === 'llm') {
                    return (
                        <div className="chat chat-start" key={index}>
                            <div className="chat-bubble chat-bubble-primary">
                                {message.message}
                            </div>
                        </div>
                    );
                } else if (message.role === 'user') {
                    return (
                        <div className="chat chat-end" key={index}>
                            <div className="chat-bubble chat-bubble-secondary">
                                {message.message}
                            </div>
                        </div>
                    );
                }
            })}

            {messages.length > 0 &&
                messages[messages.length - 1].role === 'user' && (
                    <span className="loading loading-bars loading-md"></span>
                )}

            <Form
                method="POST"
                onSubmit={function (event) {
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
                    onChange={function (event) {
                        setInputValue(event.target.value);
                    }}
                    value={inputValue}
                />
            </Form>
        </>
    );
}
