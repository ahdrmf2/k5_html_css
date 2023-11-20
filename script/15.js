
// 1. 폭탄섞기
//  - 배열 이용 => 배열에 1이 있는 위치가 폭탄위치
//  - 1의 위치를 suffle기능을 구현
//  - 폭탄이 섞였는지 isSuffle flage변수를 활용 (플래그 변수)


// 2. 박스 클릭 처리
//  - 폭탄이 섞여야 박스가 클릭이 됨 => isShuffle == true
//  - 이미 이미지가 있으면 이미지를 다시 표시할 필요 없음
//  - 폭탄이미지가 나오면 더이상 클릭이 되지 않고 폭탄섞기 버튼이 다시 활성화가 되어야함
//  - 폭탄섞기 버튼이 활성화되면 전체 화면을 초기화
//  - 하트 이미지가 나오면 현재 몇개의 하트가 나왔는지를 확인
//  - 하트 개수가 8개가 되면 마지막 한개 박스에 자동으로 하트가 들어가도록 처리

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]
let isShuffle = false;
let cnt = 0; //하트개수

const init = (boxes, msg) => {
    msg.innerHTML = '';
    boxes.forEach(element => {
        element.innerHTML = element.getAttribute("id").slice(-1);
    });
    cnt = 0;
}
document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector("#bt > button");
    const boxes = document.querySelectorAll(".box");
    const msg = document.querySelector("#msg");

    bt.addEventListener("click", () => {
        if (!isShuffle) {
            
            console.log("변경 전", arr);
        }

        init(boxes, msg);
        //배열 섞기
        arr = arr.sort(() => Math.random() - 0.5);

        // 배열정렬
        // sort( ) : 알파벳 정렬
        // sort((a,b) => a-b) : 숫자 오름차순
        // sort((a,b) => b-a) : 숫자 내림차순

        console.log("변경 후", arr);
        isShuffle = true;
    })

    for (let box of boxes) {
        box.addEventListener("click", () => { //반복문을 9번 단것
            if (!isShuffle) {
                msg.innerHTML = "<h2>폭탄을 섞어주세요</h2>"
                return;
            }
            //innerHTML 값이 아닌 id값에 적혀있는걸 가져와서
            //맨 마지막 글자를 들고와 -1 해주면 배열의 위치가 되는 것.
            // 배열 위치가 0이면 하트 아니면 폭탄을 주는 것.

            if (isNaN(box.innerHTML)) {
                console.log("이미지가 있음");
                return;
            }
            //현재 박스를 기준으로 배열의 첨자를 구함
            let idx = box.getAttribute("id").slice(-1) - 1;

            //배열 내용 확인
            if (arr[idx] === 0) {
                box.innerHTML = '<img src="./images/hart.png">'
                cnt++;
                console.log("cnt=", cnt);
                if (cnt === 8) {
                    let idx1 = arr.indexOf(1) + 1;
                    console.log("idx =",idx1);
                    document.querySelector(`#box${idx1}`).innerHTML = box.innerHTML = '<img src="./images/hart.png">'
                    isShuffle = false;
                    msg.innerHTML = '<h2>성공</h2>';
                }
            }
            else {
                box.innerHTML = '<img src="./images/boom.png">'
                isShuffle = false;
                msg.innerHTML = '<h2>실패</h2>';
            }
            
        })  
    }
});