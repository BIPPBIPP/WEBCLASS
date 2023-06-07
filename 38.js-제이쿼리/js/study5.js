$(document).ready(function(){

    // $(".box").animate({width:400,height:400},1000)
    // 동시에 animate가 작동

    // $(".box").animate({width:400},1000).animate({height:400},1000).stop()
    // $(".box").animate({width:400},1000).animate({height:400},1000).clearQueue()
    // 따로따로 animate가 작동
    // stop()을 맨 뒤에 삽입하면 앞에 설정된 animate는 작동이 중지됨
    // clearQueue()은  맨 뒤에 삽입하면 앞에 설정된 animate만 작동이 됨
    // $(".box").animate({width:400},1000).delay(1000).animate({height:400},1000)

    let b1top = $(".b1").offset().top
    let b2top = $(".b2").offset().top
// 1500px에 해당하는 지점에 스크롤바를 부드럽게 이동
    $("html,body").animate({scrollTop:b2top},500)


    // offset() => 앞에 선택한 함수가 전체 문서를 기준으로 했을때, 위에서 얼마만큼, 아래에서 얼마만큼 떨어져있는지 계산한 다음 리턴해주는 함수
    // console.log($(".b1").offset().top)

});