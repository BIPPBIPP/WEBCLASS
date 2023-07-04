$(document).ready(function(){

    // let pathLength = $(".letter").get(0).getTotalLength()
    // // alert(pathLength)
    // $(".letter").css("stroke-dasharray",pathLength)
    // $(".letter").css("stroke-dashoffset",pathLength)

    $("#introtxt path").each(function(){
        let path = $(this)
        //여기서 this는 #introtxt path
        let idx = path.index()
        let seconTerm = 0.2 
        // path가 나타날때의 시간 간격
        let delay = idx*seconTerm

        let pathLength = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathLength)
        $(this).css("stroke-dashoffset",pathLength)
       
        setTimeout(function(){
            path.css("transition",`stroke-dashoffset 1s ease ${delay}s, fill 1s ease ${delay+1}s`)
            // fill을 delay+1을 해주면 stroke가 나타나고 1초 뒤에 fill이 나타남
        },500)
       
    })
    setTimeout(function(){
        $("#introtxt").addClass("on")
    },1000)

//     $("#introtxt path").each(function(){
//         let pathLength = $(this).get(0).getTotalLength()
//         $(this).css("stroke-dasharray",pathLength)
//         $(this).css("stroke-dashoffset",pathLength)
//     })
// //    이렇게 js를 설정하고 css에서 #introtxt.on에 transition을 설정하면 
// //    위에 let _this 함수를 저장하고 js를 설정하는 것과 똑같음
// //    단 addClass("on")이 필수
//     setTimeout(function(){
//         $("#introtxt").addClass("on")
//     },1000)





})