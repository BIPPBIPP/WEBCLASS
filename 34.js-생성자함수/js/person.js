function Person(userName,userAge){
    this.name = userName
    this.age = userAge
    this.sayHello = function(){
        document.write("<p>안녕하세요."+this.name+"입니다.</p>")
    }
    this.intro = function(){
        document.write(`<p>${this.name}님은 ${this.age}살 입니다.</p>`)
    }
}

// this={중가로를 사용하여 표현한 객체를 의미}, 객체를 만들려고 할 때, 생성자함수 안에서 객체를 표현할 때 사용.

