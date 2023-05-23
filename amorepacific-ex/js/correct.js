window.onload = function(){
    let BannerdtList = document.querySelectorAll(".bannertabMenu>dt")
    for(i=0;i<BannerdtList.length;i++){ 
        BannerdtList[i].addEventListener("click",function(){
            for(j=0;j<BannerdtList.length;j++){
                BannerdtList[j].classList.remove("on")
            }
           this.classList.add("on")
           
        //    this는 앞에서 선택한 dt를 가리키는 것.
        // 클릭하는 맥락 안에서 클릭한 태그를 this로 표현할 수 있다.
        
    })
}

let dtList = document.querySelectorAll(".tabMenu>dt")
for(i=0;i<dtList.length;i++){ 
    dtList[i].addEventListener("click",function(){
        for(k=0;k<dtList.length;k++){
            dtList[k].classList.remove("on")
        }
       this.classList.add("on")
       
    //    this는 앞에서 선택한 dt를 가리키는 것.
    // 클릭하는 맥락 안에서 클릭한 태그를 this로 표현할 수 있다.
    
})
}

// function tab(classname){
//     let tab = document.querySelectorAll("."+classname+">dt")
//     for(i=0; i<tab.length; i++){ 
//         tab[i].addEventListener("click",function(){
//            for(j=0; j<tab.length; j++){
//                tab[j].classList.remove("on")
//            }
//            this.classList.add("on")
// }
// tab("tabMenu")
// tab("bannertabMenu")

}
