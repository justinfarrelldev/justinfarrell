import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = function () {
    return [
        { title: 'Justin Farrell' },
        {
            name: 'Justin Farrell - Software Engineer - Home',
            content:
                'Crafting Code Excellence: Full-Stack Mastery in JavaScript',
        },
    ]
}

export default function Index() {
    return (
        <div
            style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}
        ></div>
    )
}
