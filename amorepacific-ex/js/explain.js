window.onload = function(){
    let dtList1 = document.querySelectorAll(".bannertabMenu>dt")
    for(let i =0; i<dtList1.length;i++){
        dtList1[i].addEventListener("click",function(){
            for(let j =0; j<dtList1.length;j++){
                dtList1[j].classList.remove("on")
            }
            this.classList.add("on")
        })
    }
    let dtList2 = document.querySelectorAll(".tabMenu>dt")
    for(let k =0; k<dtList2.length; k++){
        dtList2[k].addEventListener("click",function(){
            for(let k =0; k<dtList2.length;k++){
                dtList2[k].classList.remove("on")
            }
            this.classList.add("on")
        })
    }
}