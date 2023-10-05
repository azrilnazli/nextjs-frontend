'use client'
import { useRef } from "react"
import useUserStore from "./libs/store"

function StoreInitializer(email){
    const initialized = useRef(false)
    if( initialized.current ){
        useUserStore.setState({email})
        initialized.current = true
    }

    return null
}

export default StoreInitializer