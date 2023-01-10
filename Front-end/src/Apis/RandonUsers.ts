import axios from "axios";

let RandonUsers = axios.create({
    baseURL: 'https://randomuser.me/api/?seed=abc&inc=picture,name,email,login,registered,'
})

export default RandonUsers;