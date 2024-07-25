import express from "express"
import Controller from "../controllers/General.js"

const router = express.Router()

router.get("/cars", Controller.getCars)
router.post("/cars/:id", Controller.postCar)

router.get("/favorites", Controller.getFavorites)
router.delete("/favorites/:id", Controller.deleteFavorite)

router.get("/race", Controller.getRaceCars)
router.post("/race/:id", Controller.postRaceCar)
router.delete("/race/:id", Controller.deleteRaceCar)
router.delete("/race/:car1/:car2", Controller.competeCars)

export default router


