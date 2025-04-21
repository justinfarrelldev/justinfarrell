import { ActionFunctionArgs } from '@remix-run/node';
import { log } from '~/utils/logging';

export const action = ({ request }: ActionFunctionArgs) => {
    if (request.headers.get('Content-Type') === 'application/reports+json') {
        log(
            'error',
            `CSP violation has occurred. Report info:`,
            JSON.stringify(request)
        );
    } else {
        log(
            'error',
            'POST request to /reports without the content type set to "application/reports+json": ',
            request
        );
    }
};
