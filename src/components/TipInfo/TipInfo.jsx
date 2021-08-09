import BackPackInfo from "components/TipInfo/BackPackInfo/BackPackInfo";

function TipInfo({number}){
    const number2 = number  ? number : "1";
    if(number2 === "1") return <BackPackInfo/>
    if(number2 === "2") return <p>Este s el 2</p>
    if(number2 === "3") return <p>Este s el 3</p>
    if(number2 === "4") return <p>Este s el 4</p>
    if(number2 === "5") return <p>Este s el 5</p>
}
    export default TipInfo;