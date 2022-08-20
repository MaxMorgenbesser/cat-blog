import { useState, useEffect } from "react"

const GetCatPics = () =>{
   const [catPics,setCatPics]=useState([])

useEffect(()=>{
    fetch('http://localhost:4000/get5')
    .then(res=>res.json())
    .then(data=>setCatPics(data))
    .catch(err=>alert(err))
},[])
return(<>{catPics.map(pic=>{
    return(<img src={pic.Image}/>)
})}</>)


}

export default GetCatPics