
import { useEffect } from 'react'
import './toast.css'

export default function Toast({message,type="success",onClose}){
    
    useEffect(()=>{
        const timer=setTimeout(()=>{
            onClose()
        },4000)
        return ()=>clearTimeout(timer)
    },[onClose])

    return(
        <div className={`toast ${type}`}>
            Benido {message}
        </div>
    )
}