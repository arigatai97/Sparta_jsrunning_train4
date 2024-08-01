
// 1. <빈칸>을 작성해주세요
const obj1 = {
  value :20,
  getValue() {
     return this.value;
  }
  
}
console.log(obj1.getValue()) ; //  출력값 20


{
    //  2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
const obj2 ={
    method : function(){
        console.log('첫번째 this : ',this);
        // 여기서 첫번째 this가 object인 이유는 코드 상에서 실행이 되어 
        // this는 호출한 객체인 obj2를 가리키기 때문이다. 


        const innerMethod = () =>{
            setTimeout(function(){
                console.log('두번째 this : ' , this); 
                // 여기서 두번쨰 this가 windows로 나오는 이유는 전역 컨텍스트에 바인딩한 것 
                실행 
            });
        }
        innerMethod();
    }
}

obj2.method();
 }


 // this 바인딩 규칙 4가지
//  1. 기본 바인딩
// 독립 함수 호출에서의 this는 전역 객체를 가리킨다. 
//  2. 암묵적 바인딩
//  3. 명시적 바인딩
//  4. new 바인딩 

