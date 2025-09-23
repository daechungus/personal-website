/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                // Matcha Green Palette
                'matcha': {
                    50: '#f0f8f0',   // Very light matcha
                    100: '#e0f0e0',  // Light matcha
                    200: '#c0d4c0',  // Soft matcha
                    300: '#a0c0a0',  // Medium-light matcha
                    400: '#80a080',  // Medium matcha
                    500: '#6b8f6b',  // Base matcha
                    600: '#5a7a5a',  // Medium-dark matcha
                    700: '#4a6a4a',  // Dark matcha
                    800: '#3a5a3a',  // Darker matcha
                    900: '#2a4a2a',  // Darkest matcha
                },
                // Natural Beige & Tan Palette
                'beige': {
                    50: '#faf9f7',   // Cream
                    100: '#f5f3f0',  // Light beige
                    200: '#ebe7e0',  // Soft beige
                    300: '#e1dbd0',  // Medium beige
                    400: '#d7cfc0',  // Warm beige
                    500: '#cdc3b0',  // Base beige
                    600: '#b8a896',  // Medium tan
                    700: '#a38d7c',  // Dark tan
                    800: '#8e7262',  // Darker tan
                    900: '#795748',  // Darkest tan
                },
                // Deep Brown for Text
                'brown': {
                    50: '#f5f3f0',
                    100: '#ebe7e0',
                    200: '#d7cfc0',
                    300: '#c3b7a0',
                    400: '#af9f80',
                    500: '#9b8760',
                    600: '#7a6b4d',
                    700: '#594f3a',
                    800: '#383327',
                    900: '#171714',  // Deep brown for text
                },
                // Accent Colors
                'sage': {
                    50: '#f6f7f4',
                    100: '#edeff0',
                    200: '#dbdfe1',
                    300: '#c9cfd2',
                    400: '#b7bfc3',
                    500: '#a5afb4',
                    600: '#848c90',
                    700: '#63696c',
                    800: '#424648',
                    900: '#212324',
                }
            },
            backgroundImage: {
                'matcha-gradient': 'linear-gradient(135deg, #d4cb8c 25%, #ed4cb8c 50%, #c6a685 100%)',
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
