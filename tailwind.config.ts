import type { Config } from 'tailwindcss'
import daisyUI from 'daisyui'

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [daisyUI],
} satisfies Config
