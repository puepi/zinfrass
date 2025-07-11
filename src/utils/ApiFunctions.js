import axios from 'axios'

export const api = axios.create({
    baseUrl: "http://localhost:8080"
})

export async function getBatiments(subdivisionName) {
    const formData = new FormData()
    formData.append("subdivisionName", subdivisionName)
    try {
        const response = await api.get("/batiments/subdivision-name", formData)
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        console.log(error.message)
    }
}

