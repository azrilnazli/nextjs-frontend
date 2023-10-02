'use client'
import { useState,useEffect } from "react"

export default function Login() {

  const [token,setToken] = useState(null)

  useEffect( () => {
    fetch('http://localhost:8000/api/token')
    .then(response => 
      response.json()
    )
    .then(json => {
      setToken(json.token)
      console.log(json.token)
    })

  },[])
  

  return (
  <>token is -{token}</>
  )
}
