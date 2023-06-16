$(document).ready(function(){
    // menu
    let menustate = false;
    $(".mainMenu>li").mouseover(function(){
      if($(this).hasClass("on")==true){
        $(this).css("height","50px")
        $(this).removeClass("on")
      }else{
        $(this).css("heigth","50px")
        $(this).removeClass("on")
        
      }
    }).mouseout(function(){
        $(this).find(".subMenu").stop().slideUp();
    })



    // slide

    let count = 0;
    setInterval(function(){
        count++;
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li")
    })
})