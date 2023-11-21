// const funA = () => {
//     console.log("A");
//     //비동기
//     setTimeout(() => {funB();}, 5000); //B만 5초 기다린 후 적히는 콜백함수 
//     console.log("C");
//     console.log("D");
// }       
// const funB = () => {
//     console.log("B");
// }


//일일 박스 오피스 데이터 가져ㅑ오기

const getBoxOffice = (dt, tbDiv, gubun) => {
    let apikey = "f5eef3421c602c6cb7ea224104795888";                                            
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`
                                                                                                // ? 이후로는 내가 넘겨줘야하는 데이터                             
    if(gubun == '2') url = url + `&multiMovieYn=Y` ;
    else if(gubun == '3') url = url + `&multiMovieYn=N` ;
                                                                                                
    let boxList ;
    tbDiv.innerHTML = '';
    let tags = `
        <table>
            <tr>
                <th>순위</th>
                <th>영화명</th>
                <th>개봉일</th>
                <th>매출액</th>
                <th>관객수</th>
            </tr>     
    `
    fetch(url)
    .then(resp => resp.json()) //resp가 제이슨형태로 바꿔줌
    .then((data) => {
        boxList = data.boxOfficeResult.dailyBoxOfficeList;
                                        //배열
        let trs = boxList.map(item =>
            
            `<tr>
            <td class="sp1">${item.rank}</td>
            <td class="sp2">${item.movieNm}</td>
            <td class="sp1">${item.openDt}</td>
            <td class="sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
            <td class="sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</td>
            </tr>`

            //제이슨형태의 (키:값)의 오브젝트 형태
            // 파이썬의 딕셔너리
        );
        trs = trs.join('')
        console.log(trs);
//map을 이용해 만든
// console.log(trs);
// tags = tags + `<tr>`;
// tags = tags + `<td class="sp1">${item.rank}</td>`;
// tags = tags + `<td class="sp2">${item.movieNm}</td>`;
// tags = tags + `<td class="sp1">${item.openDt}</td>`;
// tags = tags + `<td class="sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>`;
// tags = tags + `<td class="sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</td>`;
// tags = tags + `</tr>`;
 /*
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
    </tr>
</table>
*/
        tags = tags + trs + `</table>`;
        tbDiv.innerHTML = tags;
        //innerHTML은 태그를 그대로 변수에 넣어서 보여주는
        //자바 string같은 느낌.
        console.log(boxList)
    })      
                //제이슨은 자바스크립트에서 오브젝트로 처리.
                //오브젝트는 key 값으로 된다.
                
}
document.addEventListener("DOMContentLoaded", () => {
    //change event
    //dt에 현재 선택된 값 가져오기
    //년4)월2)일2)
    //getdata에 날짜 넘겨주기
    //getdata 날짜 받아서 url반영
    //fetch패치하기

    //날짜 input
   
    const tbDiv = document.querySelector("#tbDiv");
    const bt = document.querySelector("#bt");

    //조회버튼
    bt.addEventListener("click", (e)=>{
        e.preventDefault();

        //날짜 input 가져오기
        const dt = inform.dt.value.replaceAll('-','');
        const gubun = inform.gubun.value;

        if (dt === '' || dt === undefined) {
            alert('날짜를 선택해주세요');
            return;
        }

        getBoxOffice(dt, tbDiv, gubun);
        console.log(dt)
        console.log(gubun);
        //console.log(inputDt.value)
        //console.log(e.target.value); //많이 쓰임
        
        // yyyymmdd 형식으로 변경
        // const dt = e.target.value.replaceAll('-','');
        //console.log(dt)

        //해당하는 날짜 조회, 어느 영역에 어떤 데이터를 받을건지.
       // getBoxOffice(dt, tbDiv);
        
    });
})