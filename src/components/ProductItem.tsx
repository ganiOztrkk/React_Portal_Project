import React from 'react'
import { Product } from '../models/IProduct'
import { useNavigate } from 'react-router-dom'

function ProductItem(props: {item:Product}) {

    const navigate = useNavigate()
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mt-3 mb-3">
        <div onClick={ ()=> navigate('/detail/'+props.item.id) } role='button' className="card">
            <img src={props.item.images[0]} className="card-img-top" style={{height:250, objectFit:'scale-down'}} alt="..."/>
            <div className="card-body">
                <span className='badge text-bg-secondary float-end'>{props.item.brand}</span>
                <h5 className="card-title" style={{height:45}}>{props.item.title}</h5>
                {props.item.description.length>50 ? 
                <p className="card-text">{props.item.description.substring(0,60)}...</p> :
                <p className="card-text">{props.item.description}</p>}
                <span className='badge text-bg-success fs-6'>{props.item.price}$ </span>
            </div>
        </div>
    </div>
  )
}

export default ProductItem