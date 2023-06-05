$(document).ready(function(){

    //  문서가 다 읽힌 뒤 실행되는 코드

    
    //1. btn1버튼을 클릭하면
    //2. textframe클래스 태그가 선택되서 글씨가 파란색이 되도록

$(".btn1").click(function(e){
    //btn1버튼을 클릭했을 때 실행되는 소스코드
    e.preventDefault() //선택한 태그가 갖는 기본기능을 억제함. 이벤트 객체를 적어주면 해당하는 태그가 기본적으로 가지고 있는 기능을 억제함.
    $(".textframe").css("color","blue")

})

// document.querySelector(".btn1").addEventListener("click",function(){
//     document.querySelector(".textframe").style.color = "blue"
// })

//1. textframe클래스 태그에 마우스를 올리명
//2. textframe클래스 태그에 밑줄 스타일이 들어갈 수 있도록

$(".textframe").mouseover(function(){
    $(this).css("text-decoration","underline")
})

// 1. textframe클래스 태그의 마우스를 바깥으로 빼면
// 2. textframe클래스 태그의 밑줄 스타일이 없어지도록 

$(".textframe").mouseout(function(){
    // $(".textframe").css("text-decoration","none")
    $(this).css("text-decoration","none")
    //앞에 클래스명을 잘 이해했다면 this를 사용해도 됨.
})








})