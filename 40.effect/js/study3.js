$(document).ready(function(){

    textAni(".title",{
        textSize:100,
        aniSpeed:0.5,
        effect:"fadeInOut"
        // -> css에서 keyframe을 저장한 다음 사용 + css keyframe이름과 js에 적용되는 이름이 같아야 함.
    })
    textAni(".title2",{
        textSize:100,
        aniSpeed:0.5,
        aniDelay:0.01,
        // effect:"fadeInOUt",
            // -> css에서 keyframe을 저장한 다음 사용 + css keyframe이름과 js에 적용되는 이름이 같아야 함.
    })

})