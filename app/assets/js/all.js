console.log('Hello!');

//功能尚未開放 
// onclick="notOpen()" 加在html標籤
function notOpen() {

  alert(`此功能尚未開放`)
}

//搜尋框>典籍切換搜尋選單

const searchClick = document.querySelector("#search-click")
const searchShow = document.querySelector("#search-hidden")

if (searchClick) {
  searchClick.addEventListener("click", function (e) {
    searchShow.classList.toggle('lg:flex');
  })
}



// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos',
//   params: {hotel_id: '363464'},
//   headers: {
//     'X-RapidAPI-Key': '8a129b9e36mshfc4b21874db1717p1d3d01jsn2fa5c0b45161',
//     'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });