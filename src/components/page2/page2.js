
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./page2.css"


export const Page2 = ()=>{
    let[data,setData] = useState([])
    let filterr = {};

    let {id} = useParams()

    data.filter((e)=>{
        if(e.code == id){
        filterr = e;
        }
    },[])

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
         let result = await axios.get(`http://localhost:8080/data`)
        setData(result.data)
    }

    console.log(filterr)
    
return<>
    <div>

<div>
    <img src={filterr.url}/>
    <h1>{filterr.product_name}</h1>
</div>

        <table>
        <thead>
        <tr> <th scope="row">url</th>
        <td>{filterr.url}</td></tr>

        <tr> <th scope="row">carbohydrates_100g</th>
        <td>{filterr.carbohydrates_100g}</td></tr>

        <tr> <th scope="row">fiber_100g</th>
        <td>{filterr.fiber_100g}</td></tr>

        <tr> <th scope="row">omega_3_fat_100g</th>
        <td>{filterr.omega_3_fat_100g}</td></tr>

        <tr> <th scope="row">sugars_100g</th>
        <td>{filterr.sugars_100g}</td></tr>

        <tr> <th scope="row">packaging</th>
        <td>{filterr.packaging}</td></tr>

        
        </thead>
        </table>
    </div>
</>
}