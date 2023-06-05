$(document).ready(function(){
    // btnMenu클래스 버튼을 클릭했을 때 nav태그가 보이게 되도록 기능


//     let gnbState = false;

// $(".btnMenu").click(function(){
//     if(gnbState==false){
// // 메뉴가 닫혀있는 상태 -> 메뉴를 여는 기능
//         $("nav").addClass("on")
//         gnbState=true
// // if구문이 false로 설정이 되어있기 때문에 else부분은 해석이 되지 않고, if부분만 해석이 된다.
//     }else{
// // 메뉴가 열려 있는 상태 -> 메뉴를 다는 기능
//         $("nav").removeClass("on")
//         gnbState=false
//         // 메뉴의 상태를 지정해 주어야함. 그래야 else부분을 해석.
//         //
//     }
   
// })
$(".btnMenu").click(function(){

// $(선택된 태그).hasClass("on")
// 선택한 태그가 on이라는 클래스가 있다면 사용된 자리에 true를 리턴하고 선택한 태그가 on이라는 클래스가 없다면 사용된 자리에 false를 리턴하는 방식

   if($("nav").hasClass("on")==false){
// 메뉴가 닫혀있는 상태 -> 메뉴를 여는 기능
        $("nav").addClass("on")
// if구문이 false로 설정이 되어있기 때문에 else부분은 해석이 되지 않고, if부분만 해석이 된다.
    }else{
// 메뉴가 열려 있는 상태 -> 메뉴를 다는 기능
        $("nav").removeClass("on")
        // 메뉴의 상태를 지정해 주어야함. 그래야 else부분을 해석.
        //
    }
   
})

$(".gnb>li").click(function(){
    //1뎁스 li를 클릭했을 때, 2뎁스 목록이 보이게 하는 기능

// 리스트 클릭했을 때 내가 클릭한 리스트한테 on클래스가 있다 / 없다

if($(this).hasClass("on")==true){
    $(this).css("height","50px")
    $(this).removeClass("on")
}else{
    $(this).css("height","50px")
    $(this).removeClass("on")
    let li2dep = $(this).children("ul").children().length
    $(this).css("height",(li2dep+1)*50+"px")
    $(this).addClass("on")
}
// => 열고 닫는 메뉴 완성


//=> 하나를 클릭하고 밑에 하나를 클릭해야지 먼저 클릭했던 메뉴가 닫힘. 그리고 마지막으로 열린 메뉴는 닫히지 않음.
    // $(".gnb>li").css("height","50px")
    // // 여러 개의 리스트 중 내가 클릭한 리스트가 포함하고 있는 뎁스 ul태그의 자식 li 태그의 개수를 구해서 그 개수의 비례한 만큼의 값으로 클릭한 리스트의 높이를 지정
    // //예) about클릭 -> 높이 150px
   

    // let li2depth = $(this).children("ul").children().length
    // //li2depth에는 내가 선택한 태그의 자식의 자식 을 선택한 것, 그러므로 그 자식의 배열 수에 따라 길이가 결정되는 것.
    // $(this).css("height",(li2depth+1)*50+"px")
    // // li2depth에 +1(1뎁스의 높이)를 해주고 *50(각 li들의 높이)


})

})