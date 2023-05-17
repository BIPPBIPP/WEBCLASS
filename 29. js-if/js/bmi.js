function getBmi(uheight,uweight){
    let result;
    result = uweight / Math.pow(uheight/100,2)
    //Math.pow는 제곱하는 도구 -> Math.pow(곱할 수 ,제곱수)
    return result;
}


function getBmi_result(bmiNum){
    //bmi수치가 매개변수로 들어왔을 때 내부적으로 조건문을 통해 비교를 하고 결과를 남겨주는 함수.
    let result;
    if(bmiNum>=25){
        result ="비만"
}else if(bmiNum >=23 && bmiNum<=24.99){
    result ="과체중"
}else if(bmiNum>=18.5 && bmiNum<=22.99){
    result ="정상"
}else if(bmiNum<=18.5){
    result ="저체중"
};
    return result;
}
// console.log(getBmi_result(getBmi(height,weight)));


function showResult(uname,uheight,uweight,ubmi,uBmiResult){
    document.write(`<table class="bmiStyle">
    <caption>${uname}님의 비만도 검사 결과</caption>
    <tr>
        <th>신장</th>
        <td>${uheight}cm</td>            
    </tr>
    <tr>
        <th>몸무게</th>
        <td>${uweight}kg</td>            
    </tr>
    <tr>
        <th>BMI</th>
        <td>${ubmi}</td>            
    </tr>
    <tr>
        <th>결과</th>
        <td>${uBmiResult}</td>            
    </tr>
    </table>
`)
};

