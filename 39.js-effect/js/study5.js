$(document).ready(function(){

    let count = 0;
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


    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")
    }



})