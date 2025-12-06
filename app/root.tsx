import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { type LinksFunction, data } from 'react-router';
import stylesheet from '~/tailwind.css?url';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
];

export const loader = () =>
    data(
        {},
        {
            headers: {
                'Content-Security-Policy':
                    "default-src 'self'; report-to main-endpoint;",
                'Reporting-Endpoints': `main-endpoint="https://www.justin-farrell.com/reports", default="https://www.justin-farrell.com/reports"`,
            },
        }
    );

export const Layout = ({ children }: { children: React.ReactNode }) => (
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

const App = () => <Outlet />;

export default App;
