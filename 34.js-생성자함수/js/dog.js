function Dog(dogName,dogAge){
    this.name = dogName
    this.age = dogAge
    this.feel = Math.floor(Math.random()*3)
    this.say = function(){
        if(this.feel==0){
            document.write(`멍멍! 나는 ${this.age}살 ${this.name}이다! 기분이가 좋다!<br>`)
        }else if(this.feel==1){
            document.write(`${this.name}는 지금 심심하고 배고파요~ 멍멍~<br>`)
        }else{
            document.write(`${this.name}는 지금 굉장히 화가난다! 왈왈!!!!!!밥 내놔!!!<br>`)
        }
    }
}