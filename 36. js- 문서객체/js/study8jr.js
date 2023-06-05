let tabDescription = [
        // 배열 안에 문자데이터 원소가 나열되어 있음
        `<h3>title1</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odit a vel, sed at culpa in tenetur porro maiores accusantium numquam vitae vero doloribus sint itaque voluptatem, consectetur et magni?</p>`,
        `<h3>title2</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odit a vel, sed at culpa in tenetur porro maiores accusantium numquam vitae vero doloribus sint itaque voluptatem, consectetur et magni?</p>`,
        `<h3>title3</h3>
        <ul>
            <li>des1</li>
            <li>des2</li>
            <li>des3</li>
            <li>des4</li>
        </ul>`
    ]
    // ready 안에 넣어도 되고 안넣어도 됨. -> 어떤 태그를 선택한 함수가 아니기 때문
$(document).ready(function(){

    $(".tabTit>li").click(function(){

        $(".tabTit>li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index()   
        //index()함수는 앞에 선택된 태그의 부모태그(.tabTit>li) 기준 순번을 리턴함 -> 위에서 클릭했던 tabTit>li의 순번을 체크하게 되는 것
        $(".tabDes").html(tabDescription[idx])
        //html()함수 안에 tabDescription변수의 순번이 들어가야하기 때문에 []안에는 idx변수를 넣어준다.
        
    })


})