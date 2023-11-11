import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            animation: {
                spin180: 'spin180 700ms steps(100)'
            },
            keyframes: {
                spin180: {
                    from: {
                        transform: 'rotate(-180deg)'
                    },
                    to: {
                        transform: 'rotate(0deg)'
                    }
                }
            }
        }
    },
    plugins: []
};
export default config;
