document.addEventListener("DOMContentLoaded", () => {
    //배열 선언  //입력버튼
    //돔 컨텐츠가 로드되면 에드 이벤트리스너가 실행한다.  자바 메인 같은 public static void main비슷함~
    const bt11 = document.querySelectorAll(".bt11");
    // let arr = new Array();//삭제버튼
    const bt12 = document.querySelectorAll(".bt12");
    const bt13 = document.querySelectorAll(".bt13");
    const txt1 = document.querySelector("#txt1")
    //배열(array)  배열안의 항목이 오브젝트 될수도있음
    let arr = [];
    //오브젝트(object)
    const emoji = {
        '사과': '🍎',
        '바나나': '🍌',
        '오렌지': '🍊',
        '메론': '🍈',
        '당근': '🥕',
        '오이': '🥒',
        '아보카도': '🥑',
        '브로콜리': '🥦'
    }
    //입력처리
    for (let bt of bt11) {
        bt.addEventListener("click", (e) => {
            //4개의 버튼 이벤트를 한번에잡은것
            e.preventDefault();

            //console.log(bt.innerHTML);
            // let emoji ;         //trim 앞뒤 공백 제거 해주는
            // switch(bt.innerHTML.trim()){
            //     case '사과' : emoji = '🍎' ; break;
            //     case '바나나' : emoji = '🍌' ; break;
            //     case '오렌지' : emoji = '🍊' ; break;
            //     case '메론' : emoji = '🍈' ; break;
            // }

            // 조건식으로 처리하지 않고 오브젝트로 처리
            arr.push(emoji[bt.innerHTML.trim()]);
            // console.log(arr);
            //innerHTML이 버튼을 가져오는   
            txt1.value = arr.join(' ');
        });
    }
    //삭제처리
    for (let bt of bt12) {
        bt.addEventListener("click", (e) => {
            e.preventDefault();

            // arr = arr.filter((item) => {
            //     let key = bt.innerHTML.slice(0, -2);
            //     // console.log(key, emoji)

            //     return item != emoji[key];
            // });//필터는 리턴의 조건식


            //많이 쓰임  맵과 필터는 array배열.
            arr = arr.filter(item => item != emoji[bt.innerHTML.slice(0, -2)]);
            // //화살표 콜백 함수 필터나 맵은 반드시 리턴해야함. 맞으면 리턴 아니면 x
            txt1.value = arr.join(' ');
        })
    }

    //변경처리
    for (let bt of bt13) {
        bt.addEventListener("click",(e)=>{
            e.preventDefault();

            let key = bt.innerHTML;
            key = key.split('→')
            //console.log(emoji[key[0]], emoji[key[1]]);

            // arr = arr.map((item)=>{
            //     console.log(item)
                //삼항연산자 이용
                // return item == emoji[key[0]] ? emoji[key[1]] : item;
            //리턴으로 사과 들고오고 사과이면 사과를 당근으로 바꾸고 아니라 바나나이면 내꺼 그대로 보이는
            
            arr = arr.map(item=> item == emoji[key[0]] ? emoji[key[1]] : item);
//삼항연산자 이용해서 map에 아이템(사과)가 key[[0]]이 사과이면 ? emoji[key[1]]이 사과면 당근으로
//다른 과일인 바나나를 눌러서 바꾸려하면 당근으로 변하지 않고 올렸던 과일 그대로나온다.
           
            txt1.value = arr.join(' ');
        })
    }
});