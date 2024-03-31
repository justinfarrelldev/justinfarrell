import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import stylesheet from '~/tailwind.css?url'

export const links: LinksFunction = function () {
    return [{ rel: 'stylesheet', href: stylesheet }]
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
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
                {children}
                <h1 className="text-3xl font-bold text-red-500 underline">
                    Hello world from Tailwind!
                </h1>
                <button className="btn btn-outline">
                    Hello world from Daisy UI
                </button>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}
