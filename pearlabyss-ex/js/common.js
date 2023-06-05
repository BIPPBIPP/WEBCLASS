window.onload = function(){

    let newsSlider = new Swiper('.newStation',{
        slidesPerView : 3,
        pagination : {
            el: '.news_pagination',
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
    let noticeSlider = new Swiper('.notice_station',{
        slidesPerView : 4,
        pagination : {
            el: '.notice_pagination',
            clickable: true,
        },
        breakpoints:{
            280:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:4,
                spaceBetween:20,
            },
        }


    })







}