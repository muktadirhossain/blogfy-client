import axios from "axios"
import API from "../assets/API"

export const getAllCategories = async () => {
    try {
        const res = await axios.get(API.GET_ALL_CATEGORIES)
        return res.data.data
    } catch (error) {
        throw new Error(error?.message)
    }
}