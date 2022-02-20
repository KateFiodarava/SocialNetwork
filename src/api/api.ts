import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '6a839c08-d4d3-4bf1-a317-273f31facc46'
  }
})

export const userAPI = {
  getUsers  (currentPage: number, pageSize: number)  {
    return instance.get( `users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  followed  (id:number)  {
    return instance.post( `follow/${id}`)
      .then(response => {
        return response.data
      })
  },
  unfollowed  (id:number)  {
    return instance.delete( `follow/${id}`)
      .then(response => {
        return response.data
      })
  },
  getProfile(userId:number) {
    console.warn('Obsolete method.Please profileAPI object')
    return profileAPI.getProfile( userId)
  }
}



export const profileAPI = {
  getProfile(userId:number) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId:number) {
    return instance.get (`profile/status/`+ userId);
  },
  updateStatus(status:string) {
    return instance.put(`profile/status/`,{status:status});
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email:string,password:string,rememberMe=false) {
    return instance.post(`auth/login`,{email,password,rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`,)
  }
}