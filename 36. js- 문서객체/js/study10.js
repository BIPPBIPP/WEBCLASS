window.onload = function(){

//     let slider1 = new Swiper(".station1",{
//         // Optional parameters
//         // direction: 'vertical',  //세로로 슬라이드가 넘어감
//         loop: true,  //슬라이드가 무한대로 생김.
//         slidersPerView:1.5,
//         pagination:{
//             el:".swiper-pagination",
//         }
// })

    // 클릭 드래그를 통해 슬라이드 이동 가능.
    // new Swiper은 html에 연결 시킨 api-js로 인해 함수가 이미 만들어져 있음.


    // let slider2 = new Swiper(".station2",{
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev"
    // }
    // }
    // )


    let station1 = new Swiper('.station1',{
        loop:true,
        direction:'horizontal',
        // slidesPerView:'3', //슬라이드 개수의 절반만큼 적용 가능
        // spaceBetween:40,
        pagination: {
            el: '.swiper-pagination',
            //element -> 
            type: 'bullets',
            clickable: true,
          },
        navigation: {
        nextEl: '.csNextBtn',
        prevEl: '.csPrevBtn',
        },
        autoplay: {
            delay: 1000,
            // pauseOnMouseEnter:true
            },
        speed:1000,
        breakpoints:{
            320:{
                slidesPerView:1,
                spaceBetween:0
            },
            768:{
                slidesPerView:2,
                spaceBetween:10
            },
            1024:{
                slidesPerView:3,
                spaceBetween:20
            },
        }
    }
    )

    document.querySelector(".station1").addEventListener("mouseover",function(){
        station1.autoplay.stop()
    })
    document.querySelector(".station1").addEventListener("mouseout",function(){
        station1.autoplay.start()
    })
    








}


