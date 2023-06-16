$(document).ready(function(){

// menu
$(".depth1").mouseover(function(){
    $(".subMenu").stop().slideDown();
}).mouseout(function(){
    $(".subMenu").stop().slideUp();
});


// slide
let count =0;
function moveSlider(idx){
    $(".train").css("transform","translateY("+(idx*-300)+"px)")
}
setInterval(function(){
    count++;
    if(count>2){count=0}
    moveSlider(count)
},3000);


// tabMenu

$(".tabmenu>dt").click(function(e){
    e.preventDefault();
   $(".tabmenu>dt").removeClass("on")
   $(this).addClass("on")
})


// popup
$(".noticeTxt>li:nth-of-type(1)").click(function(e){
    e.preventDefault();
    $(".popup").addClass("on")
})
$(".btnClose").click(function(e){
    e.preventDefault();
    $(".popup").removeClass("on")
})

})