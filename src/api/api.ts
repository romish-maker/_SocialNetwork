import axios from "axios";
import {ProfileResponseType} from "../components/Profile/ProfileContainer";

const responsibility = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '80eb5949-f219-445c-914e-979ba68d88e5'
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return responsibility.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    }
}
export const authAPI = {
    getAuthMe ()  {
        return responsibility.get(`auth/me`).then(response => {
            return response.data
        })
    }
}
export const followAPI = {
    unFollow(id: number) {
        return responsibility.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    follow(id:number) {
        return responsibility.post(`follow/${id}`).then(response => {
            return response.data
        })
    }
}
// export const profileAPI = {
//     getUserProfilePage (userId: string) {
//         return responsibility.get(`${userId}`)
//     }
//}


