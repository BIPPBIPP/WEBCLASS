$(document).ready(function(){

    // 스크롤을 내리면 영역2의 글씨 애니메이션 (글자 투명도 0 -> 1)
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let con2top = $(".con2").offset().top
        if(winst>=con2top){
            $(".con2").addClass("on")
        }else{
            $(".con2").removeClass("on")
        }

    })
    // $(".wrap>div").click(function(){}) = $(".wrap>div").on("click",function(){})
    $(".wrap>div").on("wheel DOMMouseScroll",function(event){
        // DOMMouseScroll은 safari, firefox에서 사용하는 wheel 기능
        // console.log(event)
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40
        }else{
            delta = E.wheelDelta
        }
        // chrome브라우저와 firefox의 호환성을 맞춰주기 위한 작업

        if(delta<0){
            // 마우스 휠을 내렸을 때
            
            // if($(this).next().length){}
            // 굳이 'length!=0'라고 쓰지 않고 'lenght'만 써도 됨.
            if($(this).next().length!=0){
                // if($(this).next().length!=0){}
                // ->console창에서 에러가 뜨는 것을 방지해줌. 다음 형제의 length가 0으로 계산되므로 해석되지 않는다.
                let posTop = $(this).next().offset().top
                console.log(posTop)
                $("html,body").stop().animate({scrollTop:posTop},1000)

            }
            // this = 휠을 내리려고 할 때 마우스가 올라가 있는  영역태그
            // offset : 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동시킴 -> 휠을 시키려는 영역의 다음 영역태그의 좌표로 이동시키는 것.
            // stop()을 중간에 넣어주면 실행 중이던 함수를 멈추고 다음 함수동작을 실행함
        }else{
            // 마우스 휠을 올렸을 때
            if($(this).prev().length!=0){
                let posDow = $(this).prev().offset().top
                console.log(posDow)
                $("html,body").stop().animate({scrollTop:posDow},900)
            }
           
        }
        return false
    })


})