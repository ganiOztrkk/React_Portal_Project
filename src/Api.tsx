import axios from "axios";
import { IProducts, Product } from "./models/IProduct";

const baseURL = 'https://dummyjson.com/'
const config = axios.create({
    baseURL: baseURL,
    timeout: 15000
})

// get all product

export const getAllProducts = () => {
    return config.get<IProducts>("products")
}

// get single product

export const getProductById = ( id: number ) => {
    return config.get<Product>("products/"+id)
}