$(document).ready(function(){

    $(".list>li").each(function(){
        let result = Math.round(Math.random())
        if(result==0){
            $(this).addClass("mbtt")
        }else if(result==1){
            $(this).addClass("mrtl")
        }else if(result==2){
            $(this).addClass("mltr")
        }else{
            $(this).addClass("mttb")
        }
        
    })


    $(window).scroll(function(){

        let winst = $(window).scrollTop()   //스크롤바가 위에서 얼마큼 내려왔는지 계산
        let winHeight = $(window).height()*0.65 //브라우저화면의 높이를 계산
    
        $(".mltr,.mrtl,.mbtt,.mttb").each(function(){
            if(winst+winHeight>$(this).offset().top){
                // 선택한 각각의 h1 태그의 탑좌표(위치)보다 winst값이 크다면
                $(this).addClass("on")

            }else{
                $(this).removeClass("on")
            }
        })
    })






})