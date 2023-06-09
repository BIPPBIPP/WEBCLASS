$(document).ready(function(){

    // 윈도우 스크롤이 400이상으로 내려가면 header태그의 스타일이 작으 ㄴ스타일이 되고, 
    // 그렇지 않다면 기본스타일이 적요될 수 있도록

    $(window).scroll(function(){
        // 스크롤바가 움직일 때마다 실행되는 소스코드
        let windTop = $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려와있는지를 계산
        if(windTop>=400){
            $("header").addClass("sma")
        }else{
            $("header").removeClass("sma")
        }

    })

    // btnTop을 클릭하면 스크롤바가 가장 최상단을 부드럽게 이동될 수 있도록
    
    $(".btnTop").click(function(){
        // $("html,body").animate({scrollTop:0},500)
        // moveScroll(0,2000)
        moveScroll({
            top: 0,
            speed:2000,
            
        })
        // html,body를 기준으로 scrollTop을 '0'으로 설정해주면 맨 위로 올라간다
    })


    // 각각의 메뉴리스트를 크릭했을 때 해당되는 영역으로 부드럽게 스크롤 영역 이동
    $(".gnb>li>a").click(function(e){
        e.preventDefault()

        let target = $(this).attr("href")
        // 클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target변수에 저장된다(문자데이터형태로"#s1","s#2" ...)
        let target_top = $(target).offset().top
        // $("html,body").animate({scrollTop:target_top},1000)
        // moveScroll(target_top,1000)
        moveScroll({
            top: target_top,
            speed: 1000,

        })
        // let s2top = $("#s2").offset().top
        // $("html,body").animate({scrollTop:s2top},500)
    })
    
    // 해당 목차를 클릭했을 때 해당 페이지로 이동하는 함수
    // top -> 함수의 재료가 들어고는 재료 투입구
    // function moveScroll(top,speed){
    //     $("html,body").stop().animate({scrollTop:top},speed)
    // }

    // option에는 객체형태로 들어옴
    function moveScroll(option){
        $("html,body").stop().animate({scrollTop:option.top},option.speed)
    }
})