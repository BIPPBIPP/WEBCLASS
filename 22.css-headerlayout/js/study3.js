$(document).ready(function(){
    // 1. gnb클래스에 마우스를 올리면 header태그에 on클래스가 추가되어 커버가 깔림
    $(".gnb>li").mouseover(function(){
        $("header").addClass("on")
    }).mouseout(function(){
    // 2. gnb클래스에서 마우스를 빼면 header태그에 on클래스가 삭제되어 커버가 닫힘
        $("header").removeClass("on")
    })
})