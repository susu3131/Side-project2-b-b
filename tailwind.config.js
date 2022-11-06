module.exports = {
  content: ["./app/**/*.{html,ejs,js}"],
  theme: {
    //theme 下覆蓋原tailwind樣式
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      //extend 自行客製新增樣式
      colors: {
        'primary': '#2488B2', //主色
        'secondary': '#EC7B7B', //副色
        'star': '#FFC700',
        'light': '#8A8888',
        'dark': '#116D94',
        'bg-color': '#EEF6FA',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}