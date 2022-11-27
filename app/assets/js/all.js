console.log('Hello!');

//功能尚未開放
// 問題 選取class 跳alert

const notOpen = document.querySelector(".notopen")
const notOpenAll = document.querySelectorAll(".notopen")

console.log(notOpen)
console.log(notOpenAll)

notOpen.addEventListener("click",function(e){

  alert(`此功能尚未開放`)
})



//搜尋框>典籍切換搜尋選單

const searchClick = document.querySelector("#search-click")
const searchShow = document.querySelector("#search-hidden")


searchClick.addEventListener("click",function(e){
  searchShow.classList.toggle('lg:flex')
})


