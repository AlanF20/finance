import type { Config } from "tailwindcss";

const config: Config = {
<<<<<<< HEAD
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'overview': "url('../../public/icon-nav-overview.svg')"
      }
    },
  },
  plugins: [],
=======
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			backgroundImage: {
				"illustration": "url('/public/illustration-authentication.svg)"
			}
		},
	},
	plugins: [],
>>>>>>> dec8c7515f7f2af6b7614344c5459f54acf411a2
};
export default config;
