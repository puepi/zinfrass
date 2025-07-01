import axios from 'axios'

export const api = axios.create({
    baseUrl: "http://localhost:8080"
})

export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms/add-room", formData)
    if (response.status === 201)
        return true
    return false
}

export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room-types")
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}