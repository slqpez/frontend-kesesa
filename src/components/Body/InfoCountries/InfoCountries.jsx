import React,{useState, useEffect} from 'react'
import {getInfoCountries} from "services/infoCountry"
import "./infoCountries.css"

function InfoCountries({contryname}) {

const [info, setInfo] = useState({})
const[search, setSearch] = useState("")
/* const [countryName, setCountryName] = useState("")
 */
     useEffect(()=>{
       getInfoCountries(contryname)
       .then(data=>setInfo(data))
       .catch(error=>console.log(error))
    },[contryname]) 

    console.log(contryname)

    const handleSearch =(e)=>{
        setSearch(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
/*         setCountryName(search)
 */    }

    return (
        <div className="containerInfo">
            <div className="titleContainer">
                <h2>Información del país de destino</h2>
            
            
                <form action="" onSubmit={handleSubmit}>
                    <div className="info">
                    
                    {Object.keys(info).length !== 0?
                    <div>
                        <p>Nombre completo: {info.names.full}  </p>
                        <p>Continente: {info.names.continent} </p>
                        <p>Moneda: {info.currency.name} </p>
                        <p>Lenguaje: {info.language[0].language} </p>
                        <p>Teléfonos importantes:  </p>
                        <p className="numberPhones">Ambulancia --- {info.telephone.ambulance}</p>
                        <p className="numberPhones">Policia --- {info.telephone.police}</p>
                        <p className="numberPhones">Código de llamada --- {info.telephone.calling_code}</p>
                        <p>Zona horaria: {info.timezone.name}</p>
                        <p>Agua: {info.water.short}</p>
                        <p>Electrícidad: </p>
                        <p>Frecuencia:{info.electricity.frequency}</p>
                        <p>Tipos de entrada:{info.electricity.plugs.map((type, index) => <span key={index}>{type}</span>)}</p>
                    </div>:null
                    }
                        
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default InfoCountries
