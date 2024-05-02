import { Form } from '@remix-run/react';
import { Message } from './route';

type Props = {
    onUserMessage: (messageContent: string) => any;
    messages: Message[];
};

export function Chat({ onUserMessage, messages }: Props) {
    return (
        <>
            {messages.map(function (message, index) {
                if (message.role === 'llm') {
                    return (
                        <div className="chat chat-start" key={index}>
                            <div className="chat-bubble">{message.message}</div>
                        </div>
                    );
                } else if (message.role === 'user') {
                    return (
                        <div className="chat chat-end" key={index}>
                            <div className="chat-bubble">{message.message}</div>
                        </div>
                    );
                }
            })}

            <Form
                method="POST"
                onSubmit={function (event) {
                    const formData = new FormData(event.currentTarget); // Access the form data
                    console.log('submitting form:', formData.get('userInput')); // Log specific input data

                    if (formData.get('userInput'))
                        onUserMessage(formData.get('userInput')!.toString());
                }}
            >
                <input
                    name="userInput"
                    type="text"
                    placeholder="Ask About Me"
                    className="input input-bordered input-secondary my-4 w-full"
                />
            </Form>
        </>
    );
}
