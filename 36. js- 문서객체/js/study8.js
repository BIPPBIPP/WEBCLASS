window.onload = function(){
    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes = document.querySelector(".tabDes")
    let tabDescription = [
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

    for(let i = 0; i<tabTitles.length; i++){
        tabTitles[i].addEventListener("click",function(){
            for(j=0; j<tabTitles.length; j++){
                tabTitles[j].classList.remove("on")
            }
           this.classList.add("on")

           tabDes.innerHTML = tabDescription[i]
           //innerHTML은 tabDes HTML안에 tabDescription를 넣어줌
           //요소(element) 내에 포함 된 HTML 또는 XML 마크업을 가져오거나 설정

        })
    }





}