$(document).ready(function(){

    let count = 0;
    let perView;
    // train클래스 너비를 변경 -> train클래스의 너비를 불러와서 perView로 나눈 후 결과를 다시 적용
    let stationWidth;
    let trainWidth;
    let winWidth = $(window).width()
        
    if(winWidth>=1024){
        console.log("pc")
        perView = 2.5;
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
    }else if(winWidth>=768){
        console.log("tab")
        perView = 2;
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
    }else{
        console.log("mo")
        perView = 1;
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
    }

    if($(window).width()>=1024){
        perView = 2.5
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
    }else if($(window).width()>=768){
        perView = 2
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
    }else{
        perView = 1
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
    }

    


    $(window).resize(function(){
        
        let winWidth = $(window).width()
        
        if(winWidth>=1024){
            console.log("pc")
            perView = 2.5;
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }else if(winWidth>=768){
            console.log("tab")
            perView = 2;
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }else{
            console.log("mo")
            perView = 1;
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }
    })

   


    $(".btnNext").click(function(e){
        count++;
        e.preventDefault()
        if(count>4){count=0}
        // 기차가 왼쪽으로 500px
        moveSlider(count)
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--
        if(count<0){count=4}
        moveSlider(count)
    })

    // 자동 슬라이드기능

    let timer = setInterval(function(){
        count++;
        if(count>4){count=0}
        // 기차가 왼쪽으로 500px
        moveSlider(count)
    },2000)

    $(".station").mouseover(function(){
        clearInterval(timer)
    })

    
    // mouseout()할 때, 다시 자동으로 작동
    $(".station").mouseout(function(){
        // let을 없애줘야 함 -> let에 저장하면 계속 똑같은 함수들이 저장되어 반복이 되기 때문.
        timer = setInterval(function(){
            count++;
            if(count>4){count=0}
            // 기차가 왼쪽으로 500px
            moveSlider(count)
        },2000)
    })
    

    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")
    }



})