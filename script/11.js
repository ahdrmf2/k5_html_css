document.addEventListener("DOMContentLoaded", () => {
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    //회문 처리
    bt1.addEventListener("click", (event) => {
        event.preventDefault();
        // 버튼의 기본 동작 막음
        console.log();
        // 입력 영역을 보여줍니다.
        let result = "";

        for (let i = txt1.value.length - 1; i >= 0; i--) {
            result += txt1.value[i];
        }
        console.log(result);
        if (result == txt1.value) txt2.value = '회문입니다';
        else txt2.value = '회문이 아닙니다';
    });
    //숫자 합계
    bt2.addEventListener("click", (e) => {
        e.preventDefault();
        let sum = 0;
        //
        //자바의for in 이 자바스키립트의 for of 다
        for (let c of txt1.value) {
            if (!isNaN(c)) sum = sum + parseInt(c) //숫잔지 아닌지 판별
                ;  //트루면 콘솔로 찍힘 a
        }
        txt2.value = sum;

        //숫자면 플래그값줘서 숫자가 안나올떄까지 ....
    });
});