
import {useEffect,useState} from "react"
import axios from "axios"
import "./page1.css"
import { Link } from "react-router-dom"

export const Page1 = ()=>{

    const[data,setData] = useState([])

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        let result = await axios.get("http://localhost:8080/data")
        setData(result.data)
    }

    console.log(data)

    return <>
        <div className="list">
                {data.map((e)=>{
                    return <Link to={`/${e.code}`}>
                    <div key={e.code} className="cart">
                        <div className="img"><img src={e.url} alt="image"/></div>
                        <div><h2 style={{color:"black",textDecorationLine:"none"}} >{e.product_name}({e.generic_name})</h2></div>
                    </div>
                    </Link>
                })}
        </div>
    </>
}