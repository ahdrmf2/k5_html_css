document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("msg2").innerHTML = '안녕';

    //버튼생성
    //버튼 요소를 만든것
    const bt1 = document.createElement("button");
    const bt1Text = document.createTextNode("버튼3을 눌러주세요");

    bt1.appendChild(bt1Text);
    bt1.setAttribute("id", "bt3");

    // 버튼 생성2

    const bt2 = document.createElement("button");
    const bt2Text = document.createTextNode("버튼4을 눌러주세요");

    bt2.appendChild(bt2Text);
    bt2.setAttribute("id", "bt4");
    document.getElementById('btDiv2').append(bt1);
    document.getElementById('btDiv2').append(bt2);

    //버튼 이벤트 달기
    document.getElementById('bt3').addEventListener("click", () => {
        hello(3);
    });
    bt2.addEventListener("click", () => {
        hello(4);
    });
});



//함수만들기 연습
// function hello(n) {
//     alert("Hello! 버튼" + n)
// }
// const 안변하는것 let는 바꿀 수있음 let,const는 자바 스크립트에서만 


const hello = (n) => {
    //alert("Hello! 버튼" + n);
    //document.getElementById('msg').innerHTML = "<h2>Hello! 버튼" + n + "</h2>"
    //document.querySelector('#msg').innerHTML = "<h2>Hello! 버튼" + n + "</h2>";
    //document.querySelector('.cmsg').innerHTML = "<h2>Hello! 버튼" + n + "</h2>";

    //n=>1,2,3,4
    // switch (n) {
    //     case 1:
    //         document.querySelector('#msg1').innerHTML = "<h2>Hello! 버튼" + n + "</h2>";
    //         break;
    //     case 2:
    //         document.querySelector('#msg1').innerHTML = "<h2>Hello! 버튼" + n + "</h2>";
    //         break;
    //     case 3:
    //         document.querySelector('#msg1').innerHTML = "<h2>Hello! 버튼" + n + "</h2>";
    //         break;
    //     case 4:
    //         document.querySelector('#msg1').innerHTML = "<h2>Hello! 버튼" + n + "</h2>";
    //         break;
    // }


    //백틱(`) 사용 
    let cnt = 0;
    
    //삼항연산
    // if (n <= 2) cnt = 1;
    // else cnt = 2;
    //if = ? else = :
    //조건 ? 맞으면 여기 : 틀리면 여기
    n <= 2 ? cnt = 1 : cnt = 2;
    console.log("cnt", cnt);
    
    document.querySelector(`#msg${cnt}`).innerHTML = "<h2>Hello! 버튼" + n + "</h2>";
                    //`백틱을 쓰고 ${}표시를 쓴다.
};
