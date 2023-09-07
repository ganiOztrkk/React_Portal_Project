import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../Api'
import { IProducts } from '../models/IProduct'

function Home() {

    const [proObj, setProObj] = useState<IProducts>()

    useEffect( () => {
        getAllProducts().then( res => {
            //işlem başarılı, datalar geldi
            const dt = res.data
            setProObj(dt)
        } ).catch(err => {
            //işlemde hata varsa;
            alert("Servis Hatası Oluştu.")
        })
    }, [] )

  return (
    <>
        <div className="row" >
            {proObj && proObj.products.map( (item, index) =>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mt-3 mb-3" key={index}>
                    <div className="card">
                    <img src={item.images[0]} className="card-img-top" style={{height:250, objectFit:'scale-down'}} alt="..."/>
                        <div className="card-body">
                            <span className='badge text-bg-secondary float-end'>{item.brand}</span>
                            <h5 className="card-title" style={{height:45}}>{item.title}</h5>
                            {item.description.length>50 ? 
                            <p className="card-text">{item.description.substring(0,60)}...</p> :
                            <p className="card-text">{item.description}</p>}
                            <span className='badge text-bg-success fs-6'>{item.price}$ </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}

export default Home