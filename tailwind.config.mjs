/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  extend: {
		screens: {
		  'ultrawide': '1920px', 
		},
		colors: {
		 anchorGlassBg: "hsla(0, 0%, 100%, .08)",
		  primary: '#ee00a7e4',
		  red: '#f02d00',
		  pmBlack:'#08090A',
		  osloGray:'#8A8F98',
		  mtext:{
			primary: '#f7f8f8',
			secondary: '#d0d6e0',
			tertiary: '#8a8f98',
			quaternary: '#62666d',
		  },
		  mbg:{
			primary:'#08090A',
			translucent: "hsla(0, 0%, 100%, .05)",
			tertiary:"#232326",
			level1:"#0f1011",
			level2:"#141516",
			lineSecondary:"#202122",
		  },
		  link:{
			primary: '#828fff',
			hover: '#fff',
		  },
		  woodsmoke:'#08090A',
		  btnWild:'#E6E6E6',
	
		  purple:'#7f7fff',
		  pink200:'#ff00ff'
		},
		backgroundImage: {
			'gradient-text': 'linear-gradient(45deg, #FF6B6B, #FFCC00, #6BFF6B)', // Example gradient
		  },
		spacing: {
		  104: '26rem', 
		  128: '32rem', 
		},
		width: {
		  '99': '99%',
		  '98': '98%',
		  '97': '97%',
		  '95': '95%',
		  '90': '90%',
		  '85': '85%',
		  '80': '80%',
		  '60': '60%',
		  '60vw': '60vw',
		  '70vw': '70vw',
		  '80vw': '80vw',
		  '90vw': '90vw'
		},
		height: {
		  '99': '99%',
		  '98': '98%',
		  '97': '97%',
		  '95': '95%',
		  '90': '90%',
		  '85': '85%',
		  '80': '80%',
		  '20vw': '20vw',
		  '30vw': '30vw',
		  '40vw': '40vw',
		  '70vw': '70vw',
		  '80vw': '80vw',
		  '90vw': '90vw'
		},
		keyframes: {
		  marquee: {
			"0%": { transform: "translateX(0)" },
			"100%": { transform: "translateX(calc(-100% - var(--gap)))" },
		  },
		  "marquee-vertical": {
			"0%": { transform: "translateY(0)" },
			"100%": { transform: "translateY(calc(-100% - var(--gap)))" },
		  },
		  glow: {
			'0%, 100%': { 
			  boxShadow: '0 0 13px 3px rgba(255, 0, 255, 0.5)' 
			},
			'25%': { 
			  boxShadow: '0 0 17px 4px rgba(255, 0, 255, 0.6)' 
			},
			'50%': { 
			  boxShadow: '0 0 21px 6px rgba(255, 0, 255, 0.8)' 
			},
			'75%': { 
			  boxShadow: '0 0 17px 4px rgba(255, 0, 255, 0.6)' 
			},
		  },
		  glowRed: {
			'0%, 100%': {
			  boxShadow: '0 0 25px 8px rgba(255, 0, 0, 0.35)',
			},
			'25%': {
			  boxShadow: '0 0 40px 15px rgba(255, 0, 0, 0.45)',
			},
			'50%': {
			  boxShadow: '0 0 55px 20px rgba(255, 0, 0, 0.58)',
			},
			'75%': {
			  boxShadow: '0 0 40px 9px rgba(255, 0, 0, 0.45)',
			},
		  },
		  
		 
		bounceSlow: {
		  '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
		  '50%': { transform: 'translateY(-10px)', animationTimingFunction: 'ease-in-out' },
		},
		textGlow: {
		  '0%, 100%': { textShadow: '0 0 15px #ff00ff, 0 0 25px #ff00ff, 0 0 35px #ffffff' },
		  '50%': { textShadow: '0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ff00ff' },
		}, 
		  
		},
		borderRadius: {
		  'primary': '1.8rem', 
			'4': '4px',
			'6': '6px',
			'8': '8px',
			'12': '12px',
			'16': '16px',
			'24': '24px',
			'32': '32px',
			'rounded': '9999px', // for fully rounded corners
			'circle': '50%', // for circular shapes
		},
		animation: {
		  'spin-fast': 'spin 0.8s linear infinite',
		  'animate-glow': 'glow 1.85s infinite ease-in-out',
		   bounceSlow: 'bounceSlow 1.58s infinite',
		   glowRed: 'glowRed 2s infinite',
		   textGlow:'textGlow 1.7s infinite ease-in-out',
		   marquee: "marquee 15s linear infinite ",
  
		},
		borderWidth: {
		  '3': '3px',
		},
		boxShadow: {
			low: "0px 2px 4px rgba(0, 0, 0, 0.1)",
			medium: "0px 4px 24px rgba(0, 0, 0, 0.2)",
			high: "0px 7px 32px rgba(0, 0, 0, 0.35)",
			"stack-low": "0px 8px 2px 0px transparent, 0px 5px 2px 0px rgba(0, 0, 0, 0.01), 0px 3px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 1px 0px rgba(0, 0, 0, 0.07), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)",
		  },
		
	  },
	},
	plugins: [require("tailwind-scrollbar-hide"),
		require('tailwindcss-textshadow'),
	],
};
