export const BASE_URL = 'http://localhost:3000'
// export const SERVER_URL = 'http://localhost:3000'
const API = {
    REGISTER_USER: `${BASE_URL}/api/users/create`,
    LOGIN: `${BASE_URL}/api/users/login`,
    GET_ALL_BLOGS: `${BASE_URL}/api/blog`,
    GET_ALL_CATEGORIES: `${BASE_URL}/api/category/all`,
    DELETE_CATEGORY: `${BASE_URL}/api/category/delete/`,
    POST_CATEGORY: `${BASE_URL}/api/category`,
    POST_BLOG_POST: `${BASE_URL}/api/blog`,
    GET_USER_DATA: `${BASE_URL}/api/users`,
    CHANGE_PASSWORD: `${BASE_URL}/api/users/change-password`
}
export default API;