import axios from "axios"

const carsAPI = axios.create({baseURL: "http://localhost:8000/cars"})

async function getCars() {
    const response = await carsAPI.get("/")
    return response.data
}

async function postCar(id) {
    await carsAPI.post(`/${id}`)
}

export {
    getCars,
    postCar
}