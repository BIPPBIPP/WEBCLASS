$(document).ready(function(){
// scroll
$(window).scroll(function(){
    let a = $(window).scrollTop()
    let b = $(".skill").offset().top
    let c = $(window).height()*0.5
    
    if(a+c>=b){
        if($(".skill").hasClass("on")==false){
        // skill클래스에 on클래스가 없다면
        // 한번만 실행됨.
            $(".skill").addClass("on")
            $(".skill>li").each(function(){
                let list = $(this)
                // list들이 선택되는 this -> 이 this를 선택해야 글자의 수가 올라감
                let percent = $(this).find(".per").text()
                let count = 0;
            
                let circle = $(this).find("circle")
            
                let timer = setInterval(function(){
                    // console.log($(this))
                    // 여기서의 this는 window라는 원하지 않는 this가 선택된 것
                    count++;
                    list.find(".per").text(count)
                    // 글자 숫자가 자동으로 올라감(span"per"에 입력한 값까지)
                    circle.css("stroke-dashoffset",314-(314*(count/100)))
                    if(count>=percent){
                        clearInterval(timer)
                    }
                },10)
            })
        }
    }

})

//click 버튼을 누르면 퍼센트가 계산되어 원을 둥그렇게 그려주는 함수 
$(".btn").click(function(){
    if($(".skill").hasClass("on")==false){
        // skill클래스에 on클래스가 없다면
        // 한번만 실행됨.
        $(".skill").addClass("on")
        $(".skill>li").each(function(){
            let list = $(this)
            // list들이 선택되는 this -> 이 this를 선택해야 글자의 수가 올라감
            let percent = $(this).find(".per").text()
            let count = 0;
    
            let circle = $(this).find("circle")
    
            let timer = setInterval(function(){
                // console.log($(this))
                // 여기서의 this는 window라는 원하지 않는 this가 선택된 것
                count++;
                list.find(".per").text(count)
                // 글자 숫자가 자동으로 올라감(span"per"에 입력한 값까지)
                circle.css("stroke-dashoffset",314-(314*(count/100)))
                if(count>=percent){
                    clearInterval(timer)
                }
            },10)
       })
    }
})



    
})







})