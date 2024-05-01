import { Form } from '@remix-run/react';

export function Chat() {
    return (
        <>
            <div className="chat chat-start">
                <div className="chat-bubble">
                    It&apos;s over Anakin, <br />I have the high ground.
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">You underestimate my power!</div>
            </div>
            <Form
                method="POST"
                onSubmit={function (event) {
                    const formData = new FormData(event.currentTarget); // Access the form data
                    console.log('submitting form:', formData.get('userInput')); // Log specific input data
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
