window.onload = function(){

    let nextBtn = document.querySelector(".btnNext")
    let prevbnt = document.querySelector(".btnPrev")
    
    let train = document.querySelector(".train")
    let trainList = train.children
    let count = 0   
    //클릭할 때마다 실행을 해야하는데, 함수 안에다가 하면 클릭을 할 때마다 0으로 리셋이 됨. 그래서 지역변수가 아니라 전역변수로 설정.

    let pageList = document.querySelectorAll(".pagination>li")
   

    nextBtn.addEventListener("click",function(){
        // train을 선택하여 왼쪽으로 500px 이동하는 소스코드
       count++
       if(count>3){count=0}
        train.style.transform = `translateX(-${25*count}%)`

        for(let i = 0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
            pageList[i].classList.remove("on")
        }
        trainList[count].classList.add("on")
        pageList[count].classList.add("on")
    })

    prevbnt.addEventListener("click",function(){
       count--
       if(count<0){count=3}
        train.style.transform = `translateX(-${25*count}%)`
                                            // 음수로 표기해야 이동 가능. 양수로 입력 시, 오른쪽으로 더 이동되는 것이기 때문에 원래 위치로 돌아오지 않음.
        for(let i = 0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
            pageList[i].classList.remove("on")
        }
        trainList[count].classList.add("on")
        pageList[count].classList.add("on")
    })

    for(let a = 0; a<pageList.length; a++){
        pageList[a].addEventListener("click",function(){
            count = a  //순번에 맞는 인덱스를 카운트변수에 저장한다.
            //a는 pagination배열의 갯수, 전역변수count에 a를 저장하면 a의 배열 수 만큼 count가 저장되는 것이니 pagination을 클릭하고 next,prev 버튼을 눌러도 해당 페이지 만큼 순서대로 페이지가 나타남.
            for(let i = 0; i<trainList.length; i++){
                trainList[i].classList.remove("on")
                pageList[i].classList.remove("on")
            }
            trainList[a].classList.add("on")
            pageList[a].classList.add("on")
    
            train.style.transform = `translateX(-${25*a}%)`
            
        })
       
    }

    

    




}