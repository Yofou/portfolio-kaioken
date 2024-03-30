import type { Config } from "tailwindcss"
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindForms from '@tailwindcss/forms'
import tailwindHocus from 'tailwindcss-hocus'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			fontFamily: {
				merriweather: ["'Merriweather'", ...defaultTheme.fontFamily.sans],
				fira: ["'Fira Mono'", ...defaultTheme.fontFamily.mono],
			},
			gridTemplateColumns: {
				container: 'minmax(0, 1fr) minmax(0, var(--container, 1250px)) minmax(0, 1fr)',
			},
			colors: {
				yellow: {
					300: '#E9AA52'
				},
				purple: {
          300: '#302638',
					600: '#16131d'
				}
			}
		}
	},
	plugins: [tailwindForms, tailwindHocus]
} satisfies Config
