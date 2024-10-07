/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#253B7E',
				secondary: {
					DEFAULT: '#009EE2',
					dark: '#007bb5',
				},
				white: '#FFFFFF'
			}
		}
	},
	plugins: []
};
