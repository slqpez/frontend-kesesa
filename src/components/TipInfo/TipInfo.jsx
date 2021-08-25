import BackPackInfo from "components/TipInfo/BackPackInfo/BackPackInfo";
import PassportCare from "./PassportCare/PassportCare";
import NeededVisa  from "./NeededVisa/NeededVisa";
import TravelDiseases from "./TravelDiseases/TravelDiseases";

function TipInfo({number}){
    const number2 = number  ? number : "1";

    if(number2 === "1") return <BackPackInfo/>
    if(number2 === "2") return <PassportCare/>
    if(number2 === "3") return <NeededVisa/>
    if(number2 === "4") return <TravelDiseases/>
}

    export default TipInfo;