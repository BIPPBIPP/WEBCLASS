window.onload = function(){

// let path_a = document.querySelector(".a")
let path_a = $(".cl").get(0) 
// jquery로 표현
// 제이쿼리 문서객체를 자바스크립트 문서객체로 변환하여 리턴함

let pathLength = path_a.getTotalLength()
// getTotalLength() 함수는 svg태그 안의 오브젝트의 둘레길이를 계산해서 리턴함
// 자바스크립트 문서객체의 매서드

$(".cl").css("stroke-dasharray",pathLength)
$(".cl").css("stroke-dashoffset",pathLength)


}