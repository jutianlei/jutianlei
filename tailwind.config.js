/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        scrollbar: ["rounded"], // 添加自定义滚动条样式
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // 引入tailwind-scrollbar插件
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/src/layouts/images/homebg.jpg')",
      },
    },
  },
};
