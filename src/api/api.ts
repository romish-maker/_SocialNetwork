import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '80eb5949-f219-445c-914e-979ba68d88e5'
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    }
}
export const authAPI = {
    getAuthMe ()  {
        return instance.get(`auth/me`)
    }
}
export const followAPI =  {
    follow(id:number) {
         return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    }
}
export const profileAPI = {
    getProfile (userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}


