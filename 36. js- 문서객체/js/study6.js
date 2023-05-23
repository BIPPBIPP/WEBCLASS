window.onload = function(){
    let menuState = false
    // 문서를 끝까지 읽은 뒤, 실행할 소스코드
    let btnMenu = document.querySelector(".btnMenu")
    let navTag = document.querySelector("nav")
    btnMenu.addEventListener("click",function(){
        // addEventListener:이벤트가 확인이 되었을 때 실행되는 함수, 로딩중에는 당장 실행되지 않는다.
        if(menuState==false){
            // 메뉴가 닫혀있는 경우(삼선 모양일 때는 메뉴가 닫혀있는 상태) 실행되는 코드
            btnMenu.classList.add("close")
            navTag.classList.add("show")
            menuState = true  //버튼이 X로, 메뉴는 열려있음 -> 그상태에서 클릭하면 아래의 상태인 false로
        }else{
            // 메뉴가 열려있는 경우(엑스 모양일 때는 메뉴가 열려있는 상태) 실행되는 코드
            btnMenu.classList.remove("close")
            navTag.classList.remove("show")
            menuState = false
        }
    }
    )
    
}

// 자바스크립트는 반복문이나 반복이 되게끔 설정하지 않았다면 기본적으로 위에서 아래로 한번만 실행되면 끝임. 
