export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        mystery: ['"Mystery Quest"', 'normal'],
      },
      width: {
        '45': '45%',
        '50': '50%',
      },
      safelist: [
        "mb-5",
        "lg:flex",
        "lg:mb-auto",
        "lg:flex-row",
        "flex-col-reverse",
        "flex",
        "lg:flex-none",
        "lg:w-[50%]",
        "lg:w-[45%]",
        "w-[50%]",
        "w-[45%]",
        "w-9/20",
      ],
    },
  },
  plugins: [],
}
