import React, { useState ,useEffect  } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
     const data = useLoaderData()

    // const [data, setData]= useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response=>response.json())
    //  .then(data=>{
    //     console.log(data);
    //     setData(data) 
    //  })
    // }, [])
    
    
  return (
    <div className='text-white text-3xl p-4 m-4 bg-gray-600 text-center'>Github Followers :{data.followers}
    <img  className= 'mx-auto' src={data.avatar_url} alt="git picture" width={300} />
    </div> 
  )
}

export default Github   

export const githubInfoLoader =async()=>{ 
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
 }