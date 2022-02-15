module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		fontSize: {
			xs: ["0.75rem", "1rem"],
			sm: ["0.875rem", "1.25rem"],
			base: ["1rem", "1.5rem"],
			lg: ["1rem", "1.75rem"],
			xl: ["1.1rem", "1.75rem"],
			"2xl": ["1.3rem", "2rem"],
			"3xl": ["1.5rem", "2.25rem"],
			"4xl": ["1.8rem", "2.5rem"],
			"5xl": ["2rem", "1"],
			"6xl": ["3rem", "1"],
			"7xl": ["4rem", "1"],
			"8xl": ["6rem", "1"],
			"9xl": ["8rem", "1"],
		},
		colors: {
			white: "#FFFFFF",
			black: "#000000",
			lightblack: "#242323",
      primary: "#19456B",
      secondary: "#96CEB4",
      tertiary: "#11698E",
      complementary: "#F8F1F1",
      text: "#414141",
      grayed: "#F8F1F1"
		},
		borderRadius: {
			none: "0",
			px: "1px",
			sm: "2px",
			md: "6px",
			lg: "8px",
			normal: "10px",
			large: "12px",
			full: "9999px",
		},
		extend: {
			maxWidth: {
				filter: "240px",
			},
		},
	},
	plugins: [],
};
