import axios from "axios"
import API from "../assets/API"

export const getAllBlogs = async ()=>{
    try {
        const res = await axios.get(API.GET_ALL_BLOGS)
        // console.log("TEST")
        // console.log(res)
        return res?.data?.data
    } catch (error) {
        console.log("Error fetching the blogs", error.message)
        // throw new Error("Error fetching the blogs")
    }
}
export const getBlogById = async ({params:{blogId}})=>{
    
    try {
        const res = await axios.get(`${API.GET_ALL_BLOGS}/${blogId}`);
        // console.log(res.data)
        return res?.data?.data
    } catch (error) {
        console.log("Error fetching the blogs", error.message)
        // throw new Error("Error fetching the blogs")
    }
}