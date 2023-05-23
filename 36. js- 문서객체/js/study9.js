window.onload = function(){

    let nextBtn = document.querySelector(".btnNext")
    let prevbnt = document.querySelector(".btnPrev")
    let train = document.querySelector(".train")
    let trainList = train.children
    let count = 0

    nextBtn.addEventListener("click",function(){
        // train을 선택하여 왼쪽으로 500px 이동하는 소스코드
       count++
       if(count>3){count=0}
        train.style.transform = `translateX(-${25*count}%)`

        for(let i = 0; i<trainList.length; i++){
            trainList[count].classList.remove("on")
        }
        trainList[count].classList.add("on")
    })



    
    prevbnt.addEventListener("click",function(){
       count--
       if(count<0){count=3}
        train.style.transform = `translateX(-${25*count}%)`
                                            // 음수로 표기해야 이동 가능. 양수로 입력 시, 오른쪽으로 더 이동되는 것이기 때문에 원래 위치로 돌아오지 않음.
        for(let i = 0; i<trainList.length; i++){
            trainList[count].classList.remove("on")
        }
        trainList[count].classList.add("on")
    })





}