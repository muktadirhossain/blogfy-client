export const BASE_URL = 'http://localhost:3000'
const API = {
    REGISTER_USER: `${BASE_URL}/api/users/create`,
    LOGIN: `${BASE_URL}/api/users/login`,
    GET_ALL_BLOGS: `${BASE_URL}/api/blog`,
}
export default API;