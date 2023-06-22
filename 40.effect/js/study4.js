$(document).ready(function(){

    // img list 20개 생성 
    let result='';
    // result에 ''값을 설정해주어야 undefined가 되지 않는다
    // for(let i = 1 ; i<=20 ; i++){
    //     result+= `<li>
    //         <img class="small" src="./img/pic/s${i}.jpg" alt="작은 이미지 ${i}">
    //         <img class="big" src="./img/pic/pic${i}.jpg" alt="큰 이미지 ${i}">
    //         <h2 class="title">Art Work ${i}</h2>
    //         <p>Artwork Description comes here. <br> 2023.06.20</p>
    //         <span class="btnClose">Close</span>
    //     </li>`
    // }

    for(let i = 0; i<20; i++){
        result+= `
        <li>
            <img class="small" src="./img/pic/${artwork[i].imgFileName}" alt="작은 이미지 ${artwork[i].title}">
            <h2 class="title">Art Work ${artwork[i].title}</h2>
            <p>${artwork[i].description}</p>
            <span class="btnClose">Close</span>
        </li>
        `
    }

    $(".train").html(result)

    


    $(".stationMenu>li").click(function(){
        let idx = $(this).index()
         // index는 this의 자식태그들의 개수를 새어주는 함수
        // -> 자식태그의 개수를 곱해야 해당하는 li를 클릭하면 해당되는 px만큼 움직임
        count = idx*5
       //정해진 순번에 5를 곱한 값을 전역변수 count에 저장함으로써 휠을 내렸을 때 이동되는 기능이 정상적으로 작동되게끔 해주는 코드
        $(".train").css("transform","translateX("+(-1000*idx)+"px)")
        //01~05 -> 0px
        //06~12 -> 1000px
        //11~15 -> 2000px
        //16~20 -> 3000px 
       
    })

    let count = 0;
    $(".station").on("wheel DOMMouseScroll",function(event){
        let E = event.originalEvent
        let delta =0;
        if(E.detail){
            dleta=E.detail * -40
        }else{
            delta = E.wheelDelta
        }

        if(delta<0){
            // 마우스 휠을 내렸을 때
            count++;
            console.log(count)
            if(count>15){count=15}
            $(".train").css("transform","translateX("+(-200*count)+"px)")
        }else{
            // 마우스 휠을 올렸을 때
            count--;
            if(count<0){count=0}
            $(".train").css("transform","translateX("+(-200*count)+"px)")
        }
        return false
        // 그 즉시, 종료 이벤트 ㅎ나번만 적용
    })


    // 클릭한 리스트(기차칸)의 활성화

    $(".train>li").click(function(){
        $(".train>li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index()
        count = idx //동기화 시킴
        $(".train").css("transform","translateX("+(-200*idx)+"px)")
    })

    // 닫는 버튼
    $(".btnClose").click(function(){
        $(".train>li").removeClass("on")
        return false
        // 상위 태그로 클릭 이벤트가 전달되지 않게 (버블링되지 않게) 설정
    })



})
