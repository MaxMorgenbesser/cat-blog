import { useState,useEffect } from "react"




const Post =()=>{
const [submittedCatPic,setSubmittedCatPic]=useState(false)
const [pic,setPic]=useState('')

useEffect(() => {

}, []);


async function formSubmit() {
 
    
  alert("form submitted");

  // const comment= {
  //   title:title,
  //   description:description,
  //   author:author
  // }
  

  ;
  try {
    const results = await fetch("http://localhost:4000/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pic),
    });
    console.log(results);
    const data = await results.json();
    console.log(pic);
    // alert()
  } catch (error) {
    console.log(error);
  }
}


    return (<>
    {!submittedCatPic?
    <form onSubmit={(e)=>{
        
        
        e.preventDefault()
        formSubmit
        (setSubmittedCatPic(true))}}>
    
    <input type="file" accept="image/jpeg" onChange={(e)=>setPic(e.target.files[e.target.files.length-1])}/>
    <button>Submit the photo</button>
    </form> : <h2>Thank you for submitting your photo!</h2>
}
{pic&& <img src={pic} alt='cat'></img>}
{pic&& console.log(pic)}
    </>
    )
}

export default Post