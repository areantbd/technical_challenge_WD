import axios from "axios"

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/api/v1",
  withCredentials: true,
})

export function getAllPhones() {
    return http.get("/phones")
}

export function phoneDetail(id) {
    return http.get(`/phones/${id}`)
}