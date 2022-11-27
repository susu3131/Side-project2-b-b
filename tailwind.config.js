module.exports = {
  content: ["./app/**/*.{html,ejs,js}"],
  theme: {
    //theme 下覆蓋原tailwind樣式
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1440px',
    },

    container: {
      center: true,
      //修改container 尺寸大小
      padding: {
        DEFAULT: '1rem',
      }
    },
    extend: {
      //extend 自行客製新增樣式
      borderRadius: {
        '36': '36px',
      },
      colors: {
        'primary': '#1A8EC2', //主色
        'secondary': '#EC7B7B', //副色
        'star': '#FFC700', //黃色
        'light': '#8A8888', //淺色文字
        'dark-blue': '#116D94',//深藍
        'light-blue': '#C1E1EF',//淺藍
        'bg-color': '#EEF6FA', 
      },
      fontSize: {
        60: '60px',
        48: '48px',
        40: '40px',
        36: '36px',
        32: '32px',
        28: '28px',
        24: '24px',
        20: '20px',
        18: '18px',
        16: '16px',
        14: '14px',
      },
      height: {
        'vh50': '50vh',
        'vh70': '70vh',
        'vh80': '80vh',
        'vh90': '90vh',
      },
      backgroundImage: {
        'index-banner-sm': "url('../images/bannersm.jpg')",
        'index-banner': "url('../images/banner.jpg')",
        'join-banner': "url('../images/banner-1.jpg')",
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}