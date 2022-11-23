module.exports = {
  content: ["./app/**/*.{html,ejs,js}"],
  theme: {
    //theme 下覆蓋原tailwind樣式
    container: {
      center: true,
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
        'star': '#FFC700', //黃色
        'light': '#8A8888', //淺色文字
        'dark-blue': '#116D94',//深藍
        'light-blue': '#C1E1EF',//深藍
        'bg-color': '#EEF6FA', 
      },
      fontSize: {
        60: '60px',
        48: '48px',
        40: '40px',
        32: '32px',
        28: '28px',
        24: '24px',
        20: '20px',
        18: '18px',
        16: '16px',
        14: '14px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}