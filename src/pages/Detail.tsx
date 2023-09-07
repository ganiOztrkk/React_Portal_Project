import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../Api'
import { Product } from '../models/IProduct'

function Detail() {

    const {id} = useParams()
    const navigate = useNavigate()
    const [item, setItem] = useState<Product>()
    

    useEffect( () =>{
        const idNum = Number(id)
        if(Number.isNaN(idNum) || idNum < 0 ){
            navigate('/')
        }else{
            //servis ziyaretinde bulun
            getProductById(idNum).then( res => {
                const dt = res.data
                setItem(dt)
            } ).catch( err => {
                alert("Service Error")
            } )
        }
    }, [])
  return (
    <div>
        {item && 
            <>
            {item.title}
            </>
        }
    </div>
  )
}

export default Detail