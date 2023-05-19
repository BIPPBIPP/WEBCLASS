window.onload = function(){
let title = document.querySelector("#title")
title.style.color = "blue"
let titleParent = title.parentElement
titleParent.style.border = "1px solid blue"
//parentElement -> 부모태그가 선택

//부모태그는 하나만 있고,childern자식 태그들은 여러개 있을 수 있다.
let ulTag = document.querySelector(".list") 
let list = ulTag.children
for(let i = 0; i<list.length; i++){
    list[i].style.borderBottom = "1px solid black"
}
// list[0].style.borderBottom = "1px solid black"
// list[1].style.borderBottom = "1px solid black"
// list[2].style.borderBottom = "1px solid black"
// list[3].style.borderBottom = "1px solid black"


title.nextElementSibling.style.background = "lightblue"    //다음태그형제
list[0].nextElementSibling.nextElementSibling.style.color = "red"   //'.'을 사용하여 다음 요소들을 이어서 선택할 수 있음.
ulTag.previousElementSibling.style.textDecoration = "underline"   //이전태그형제
}



