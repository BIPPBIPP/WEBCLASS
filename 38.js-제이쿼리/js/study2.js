$(document).ready(function(){
    //문서가 쭉 읽힌 뒤 실행될 소스코드 입력
    $("p").css("color","violet")
    $("p").css("font-weight","bold")
    $("p").css("color","blue").css("font-weight","normal")
    // 제이닝기법으로도 메서드를 활용할 수 있다.
    $(".naverLink").attr("href","https://www.naver.com")
    let link = $(".naverLink").attr("href")
    console.log(link)

    $(".textframe>p:nth-of-type(1)").html("<i>text()함수</i>는 선택한 태그의 안에 들어가는 내용을 새로운 내용으로 교체할 수 있다.")
    //html()을 사용해야 ""안에 <i></i>태그가 실행된다.

    let textP = $(".textframe>p:nth-of-type(2)").text()
    console.log(textP)
    
    $("#a").addClass("on")
    // document.querySelector("#a").classList.add("on")
    $("#a").removeClass("on")
    // document.querySelector("#a").classList.remove("on")

    $(".list>li").css("border-bottom","1px solid black")
    $(".list").children().css("color","blue")
    $(".list>li").parent().css("background","skyblue")
    $(".list>li:nth-of-type(2)").next().css("text-align","center")
    $(".list>li:nth-of-type(2)").prev().css("text-align","right")
    // let listArray = document.querySelector(".list").children
    // for(let i =0; i<listArray.lenght; i++){
    //     listArray[i].style.color = "red"
    // }

    $(".listNum>li").eq(2).css("color","red")


    let num = Number(prompt("몇 번째 리스트를 활성화 시키실래요?"))
    $(".listNum>li").eq(num).css("color","red")


})

