window.onload = function(){

    let newsSlider = new Swiper('.newStation',{
        slidesPerView : 3,
        pagination : {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints:{
            280:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:3,
            },
        }


    })
    let newsSlider2 = new Swiper('.newStation2',{
        slidesPerView : 4,
        pagination : {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints:{
            280:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:4,
            },
        }


    })







}