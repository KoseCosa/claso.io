/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "github-grey": "#24292f",
        "facebook-blue": "#1877F2",
        "linkedin-blue": "#0a66c2",
        "twitter-blue": "#1DA1F2",
        "strava-orange": "#FC6100",
        "instagram-purple": "#FF0076",
        "snapchat-yellow": "#FFFC00",
      },
    },
  },
  plugins: [],
};
