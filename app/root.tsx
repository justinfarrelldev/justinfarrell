import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import { json, type LinksFunction } from '@remix-run/node';
import stylesheet from '~/tailwind.css?url';

export const links: LinksFunction = function () {
    return [{ rel: 'stylesheet', href: stylesheet }];
};

export function loader() {
    return json(
        {},
        {
            headers: {
                'Content-Security-Policy':
                    "default-src 'self'; report-to main-endpoint;",
                'Reporting-Endpoints': `main-endpoint="https://www.justin-farrell.com/reports", default="https://www.justin-farrell.com/reports"`,
            },
        }
    );
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="forest" className="scroll-smooth">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <div className="m-[10%]">
                    {children}
                    <ScrollRestoration />
                    <Scripts />
                </div>
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
