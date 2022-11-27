"use strict";

console.log('Hello!'); //功能尚未開放
// 問題 選取class 跳alert

var notOpen = document.querySelector(".notopen");
var notOpenAll = document.querySelectorAll(".notopen");
console.log(notOpen);
console.log(notOpenAll);
notOpen.addEventListener("click", function (e) {
  alert("\u6B64\u529F\u80FD\u5C1A\u672A\u958B\u653E");
}); //搜尋框>典籍切換搜尋選單

var searchClick = document.querySelector("#search-click");
var searchShow = document.querySelector("#search-hidden");
searchClick.addEventListener("click", function (e) {
  searchShow.classList.toggle('lg:flex');
});
//# sourceMappingURL=all.js.map
