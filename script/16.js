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

const getBoxOffice = () => {
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20231119"

    let boxList ;

    fetch(url)
        .then((resp) => {return resp.json()})
        .then((data) => {
            boxList = data.boxOfficeResult.dailyBoxOfficeList;
            console.log(boxList)
        })
}
document.addEventListener("DOMContentLoaded", () => {
    getBoxOffice();
})