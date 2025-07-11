import axios from "axios";

export const api = axios.create({
    baseUrl: "http://localhost:8080"
})

export async function getBatiments(subdivisionName) {
    try {
        const params={}
        if(subdivisionName){
            params.subdivisionName=subdivisionName
        }
        const response = await api.get("/batiments/subdivision-name",{params:params})
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

