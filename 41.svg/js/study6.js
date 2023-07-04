$(document).ready(function(){
 
    let pathLength = $("#progress path").get(0).getTotalLength()
    $("#progress path").css("stroke-dasharray",pathLength)
    $("#progress path").css("stroke-dashoffset",pathLength)

   

    $(window).scroll(function(){
        let winTop = $(window).scrollTop()
        let fixedDivTop = $(".fixedFrame").offset().top
        let distance = winTop-fixedDivTop
        let movingAreaHeight = $(".movingArea").height()
       

        if(distance<0){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
        }

        if(distance>=0 && distance<=8000-movingAreaHeight){
            $(".movingArea").css("position","fixed")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")


            let percent = (distance/(8000-movingAreaHeight)*100)//0~100까지의 수
            $("#progress path").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
            $(".per").text(Math.round(percent)+"%")


            let percent2= (distance/(8000-movingAreaHeight)*87.5)  //0~87.5까지의 수
            $(".train").css("transform","translateX(-"+percent2+"%)")

            // let count = Math.round(distance/(8000-movingAreaHeight)*8)  //0~7까지의 수
            // let count2 = (distance/(8000-movingAreaHeight)*8)-count    //0~7까지의 수
            // console.log(count+"번째 리스트의 애니메이션이 "+count2+"%만큼 진행이되었습니다")
            // $(".train>li").removeClass("on")
            // $(".train>li").eq(count).addClass("on")

            // let count3 = count2*180
            // $(".train>li b").css("transform","rotateY("+(180+count3)+"deg)")

        }
        if(distance>7200){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top",(8000-movingAreaHeight)+"px")
        }

    })

})