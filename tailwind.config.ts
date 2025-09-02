import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Cyberpunk theme colors
				cyber: {
					cyan: 'hsl(var(--cyber-cyan))',
					purple: 'hsl(var(--cyber-purple))',
					green: 'hsl(var(--cyber-green))',
					pink: 'hsl(var(--cyber-pink))',
					orange: 'hsl(var(--cyber-orange))'
				},
				terminal: {
					bg: 'hsl(var(--terminal-bg))',
					border: 'hsl(var(--terminal-border))',
					text: 'hsl(var(--terminal-text))',
					prompt: 'hsl(var(--terminal-prompt))'
				}
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
				sans: ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'grid-move': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(50px, 50px)' }
				},
				'border-glow': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'scan': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--cyber-cyan) / 0.5)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--cyber-cyan) / 0.8)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'grid-move': 'grid-move 20s linear infinite',
				'border-glow': 'border-glow 3s ease-in-out infinite alternate',
				'typing': 'typing 3s steps(40) 1s forwards',
				'scan': 'scan 2s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
