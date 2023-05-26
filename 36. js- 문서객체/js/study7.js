window.onload = function(){
    let dtList = document.querySelectorAll(".tabMenu>dt")
    
    for(i=0;i<dtList.length;i++){ 
        dtList[i].addEventListener("click",function(){
            for(j=0;j<dtList.length;j++){
                dtList[j].classList.remove("on")
            }
           this.classList.add("on")
           
        //    this는 앞에서 선택한 dt를 가리키는 것.
        // 클릭하는 맥락 안에서 클릭한 태그를 this로 표현할 수 있다.
        
    })
}
   
}
