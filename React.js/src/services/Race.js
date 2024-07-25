import axios from "axios"

const raceAPI = axios.create({baseURL: "http://localhost:8000/race"})

async function getRaceCars() {
    const response = await raceAPI.get("/")
    return response.data
}

async function postRaceCar(id) {
    await raceAPI.post(`/${id}`)
}

async function deleteRaceCar(id) {
    await raceAPI.delete(`/${id}`)
}

async function competeCars(car1, car2) {
    await raceAPI.delete(`/${car1}/${car2}`)
}

export {
    getRaceCars,
    postRaceCar,
    deleteRaceCar,
    competeCars
}
