import axios from "axios";
import { IProducts } from "./models/IProduct";

const baseURL = 'https://dummyjson.com/'
const config = axios.create({
    baseURL: baseURL,
    timeout: 15000
})

// get all product

export const getAllProducts = () => {
    return config.get<IProducts>("products")
}