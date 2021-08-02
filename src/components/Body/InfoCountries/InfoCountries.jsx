import React,{useState, useEffect} from 'react'
import {getInfoCountries} from "services/infoCountry"
import "./infoCountries.css"

function InfoCountries() {

const [info, setInfo] = useState({})
const[search, setSearch] = useState("")
const [countryName, setCountryName] = useState("")

     useEffect(()=>{
       getInfoCountries(countryName)
       .then(data=>setInfo(data))
       .catch(error=>console.log(error))
    },[countryName]) 

    const handleSearch =(e)=>{
        setSearch(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setCountryName(search)
    }

    return (
        <div>
            <h3>Consulte la información del país que quiera visitar</h3>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="country">Ingrese el país</label>
                <input type="text" id="country" name="country" onChange={handleSearch} value={search}/>
                <div className="info">
                  
                {Object.keys(info).length !== 0?
                <div>
                    <p>Nombre completo: {info.names.full} </p>
                    <p>Continente: {info.names.continent} </p>
                    <p>Moneda: {info.currency.name} </p>
                    <p>Lenguaje: {info.language[0].language} </p>
                    <p>Teléfonos importantes:  </p>
                    <p>Ambulancia --- {info.telephone.ambulance}</p>
                    <p>Policia --- {info.telephone.police}</p>
                    <p>Código de llamada --- {info.telephone.calling_code}</p>
                    <p>Zona horaria: {info.timezone.name}</p>
                    <p>Agua: {info.water.short}</p>
                    <p>Electrícidad: </p>
                    <p>Frecuencia: {info.electricity.frequency}</p>
                    <span>Tipos de entrada: {info.electricity.plugs.map((type, index) => <span key={index}>{type}</span>)}</span>
                </div>:null
                }
                    
                </div>
            </form>
            
        </div>
    )
}

export default InfoCountries
