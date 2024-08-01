// 1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();

// 출력값 :"yuno2"
// 이유 : var 키워드는 함수 스코프를 사용하기에 name 변수는 myName이라는 함수 안에서만 유효하다 
// 하여 var name = "yuno2"; 과 var name = "yuno";는 서로 다른 변수이다.
// a(); 함수가 정의된 시점의 name 변수를 참조한다 . 이는 var name = "yuno2";


// 2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();

// 출력값 : 2
// 이유 : var는 함수 스코프를 사용하는 자료형이며, test() 함수를 호출하였을 때, 
// test() 함수 안에 if블록 내에서 var = 2로 재할당 되어서 console.log(x); 에서 순서대로 2가 출력


// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();


// 출력값 : 화살표 함수와 일반함수의 this를 처리하는 방식에 차이가 있기 때문 

// 이유 : 화살표 함수는 this를 lexical하게 처리 , 일반함수는 호출되는 컨텍스트에 따라 this가 바뀜 
// 여기서는 nameObj.method 객체 내에서 정의 되었지만, 호출은 독립적으로 이루어졌기에, 화살표 함수와 달리
// nameObj를 참조하는 것이 아닌 전역객체를 참조하게 됨 즉 this.name은 undefined의 name에 접근하려 하므로 undefinde가 출력