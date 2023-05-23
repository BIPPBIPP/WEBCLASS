window.onload = function(){
    let btn1 = document.querySelector(".btnClick")
    btn1.addEventListener("click",function(){
        // 클릭했을 때 실행되는 소스코드
        document.querySelector(".txtbox").style.color = "black"
    })

    let btnOpen = document.querySelector(".btnPopOpen")
    btnOpen.addEventListener("click",function(){
    document.querySelector(".hiddenPopup").classList.add("show")
})

    let btnClose = document.querySelector(".btnPopClose")
    btnClose.addEventListener("click",function(){
    document.querySelector(".hiddenPopup").classList.remove("show")
})
}
