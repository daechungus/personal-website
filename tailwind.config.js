/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            backgroundImage: {
                'matcha-gradient': 'linear-gradient(135deg, #d4cb8c 25%, #ed4cb8c 100%, #c6a685 1%)',
                'matcha-fade': 'linear-gradient(to bottom, #a4b07e, #707c4f, #424106)',
            },
            fontFamily: {
                'serif': ['Georgia', 'serif'],
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            }
        }
    },
    plugins: [
        import('@tailwindcss/typography')
    ],
};
