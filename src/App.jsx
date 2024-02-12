import React, { useEffect, useState } from 'react'
import './App.css'
import { axiosGet } from './services/axios'
import DetailCard from './components/Common/DetailCard';

export default function App() {
const [data,setData] = useState([]);
  async function getData(){
    const response = await axiosGet();
    setData(response.results);
  }
  useEffect(()=>{
   getData()
  },[])
  return (
     <div>
     {data.length>0&&<DetailCard data={data}/>}
     </div>
  )
}