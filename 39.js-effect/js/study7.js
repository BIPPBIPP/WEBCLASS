$(document).ready(function(){

    let count = 0;
// fadein-out
$(".btnNext").click(function(e){
    e.preventDefault()
    count++;
    if(count>4){count=0}
    $(".train>li").removeClass("on")
    $(".train>li").eq(count).addClass("on")

})
// function moveSlider(idx){
//     $(".train>li").removeClass("on")
//     $(".train>li").eq(idx).addClass("on")
// }
let timer = setInterval(function(){
    count++;
    if(count>4){count=0}
    $(".train>li").removeClass("on")
    $(".train>li").eq(count).addClass("on")
},2500)

$(".station").mouseover(function(){
    clearInterval(timer)
})

$(".station").mouseout(function(){
    timer = setInterval(function(){
        count++;
        if(count>4){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2500)
})

})