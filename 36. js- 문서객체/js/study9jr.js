$(document).ready(function(){

    let count = 0

    // 다음 버튼을 눌렀을 때
    $(".btnNext").click(function(){
        count++;
        // count를 0으로 저장을 하였으므로 계속해서 1이 +가 된다.
        if(count>3){count = 0} 
        //count가 3보다 커지지 않게 count=0 참인 값으로 정의해줌.
        // $(".train").css("transform","translateX(-"+(count*25)+"%)")
        slideMove(count)
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        // 순서에 따라 list가 선택되기 전게 on클래스를 지워준 후에, 선택되고 나서 on클래스가 들어가야지 next버튼을 눌렀을 때 효과가 나온다.

        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")

    })

    // 이전 버튼을 눌렀을 때
    $(".btnPrev").click(function(){
        count--;
        if(count<0){count=3}
        // $(".train").css("transform","translateX(-"+(count*25)+"%)")
        slideMove(count)
        // $(".train>li").removeClass("on")
        // $(".train>li").eq(count).addClass("on")
        textMove(count)
        // $(".pagination>li").removeClass("on")
        // $(".pagination>li").eq(count).addClass("on")
        pagination(count)
    })

    // slideMove라는 동작함수를 만들어서 위에 count변수를 대입하여 작용하게 한다.
    function slideMove(idx){
        $(".train").css("transform","translateX(-"+(idx*25)+"%)")
    }
    function textMove(idx){
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    }
    function pagination(idx){
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
    }

//  함수를 따로 지정하고 count변수에 적용하면 됨.


$(".pagination>li").click(function(){
    count++;
    if(count>3){count = 0}
    slideMove(count)
    textMove(count)
    pagination(count)
})


})