module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "discord-dark-1": "#202225",
        "discord-dark-2": "#2f3136",
        "discord-dark-3": "#36393f",
        "discord-dark-4": "#dcddde",
        "discord-blurple": "#7289DA",
      },
      borderRadius: {
        discord: "1rem",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
      height: ["group-hover"],
    },
  },
  plugins: [],
};
