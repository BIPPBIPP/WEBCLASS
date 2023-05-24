window.onload = function(){

    let slider1 = new Swiper(".station1",{
        // Optional parameters
        // direction: 'vertical',  //세로로 슬라이드가 넘어감
        loop: true,  //슬라이드가 무한대로 생김.
        slidersPerView:1.5,
        pagination:{
            el:".swiper-pagination",
        }
})

    // 클릭 드래그를 통해 슬라이드 이동 가능.
    // new Swiper은 html에 연결 시킨 api-js로 인해 함수가 이미 만들어져 있음.


    let slider2 = new Swiper(".station2",{
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
    }
    }
    )










}


