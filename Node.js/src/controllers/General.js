import car from "../models/Car.js"
import favorite from "../models/Favorite.js"
import raceCar from "../models/Race.js"
const MAX_RACE_CARS = 2

class Controller {
    static async getCars (req, res) {
        try {
            const findCars = await car.find({})
            res.status(200).json(findCars)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - getCar error` })
        }
    }

    static async postCar (req, res) {
        const favoriteArea = req.body
        const id = req.params.id
        try {
            const carSelected = await car.findById(id)
            const newFavorite = {
                ...favoriteArea,
                brand: carSelected.brand,
                name: carSelected.name,
                year: carSelected.year,
                image: carSelected.image,
                hp: carSelected.hp
            }
            const favoritePosted = await favorite.create(newFavorite)
            res.status(201).json({ message: "Car posted in Favorites", favorite: favoritePosted })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - postCar error` })
        }
    }

    static async getFavorites (req, res) {
        try {
            const findFavorites = await favorite.find({})
            res.status(200).json(findFavorites)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - getFavorites error` })
        }
    }

    static async deleteFavorite (req, res) {
        try {
            const id = req.params.id
            await favorite.findByIdAndDelete(id)
            res.status(200).json({ message: "Favorite successfully deleted" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - deleteFavorite error` })
        }
    }

    static async getRaceCars (req, res) {
        try {
            const findRaceCar = await raceCar.find({})
            res.status(200).json(findRaceCar)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - getRaceCars error` })
        }
    }

    static async postRaceCar (req, res) {
        const raceArea = req.body
        const id = req.params.id

        try {
            const count = await raceCar.countDocuments()
            let times = (count % 2) + 1

            if (count >= MAX_RACE_CARS) {
                return res.status(200)
            }

            const carSelected = await favorite.findById(id)
            const newRaceCar = {
                ...raceArea,
                brand: carSelected.brand,
                name: carSelected.name,
                year: carSelected.year,
                image: carSelected.image,
                hp: carSelected.hp,
                number: times
            }

            const raceCarPosted = await raceCar.create(newRaceCar)
            res.status(201).json({ raceCar: raceCarPosted })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - postRaceCar error` })
        }
    }

    static async deleteRaceCar (req, res) {
        try {
            const id = req.params.id
            await raceCar.findByIdAndDelete(id)

            const raceCarsList = await raceCar.find()
            for (let i = 0; i < raceCarsList.length; i++) {
                const newNumber = (i % 2) + 1 // Alternates between 1 and 2
                raceCarsList[i].number = newNumber
                await raceCarsList[i].save()
            }

            res.status(200).json({ message: "Car successfully deleted to race" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - deleteRaceCar error` })
        }
    }

    static async competeCars(req, res) {
        try {
            const car1 = await raceCar.findOne({ number: 1 })
            const car2 = await raceCar.findOne({ number: 2 })

            if (!car1 || !car2) {
                return res.status(404).json({ message: 'Both cars must be selected for a race.' })
            }

            let resultMessage
            let loser
            if (car1.hp > car2.hp) {
                loser = car2
            } else if (car1.hp < car2.hp) {
                loser = car1
            } else {
                loser = car1
                await raceCar.findByIdAndDelete(loser._id)
                loser = car2
                await raceCar.findByIdAndDelete(loser._id)
            }

            await raceCar.findByIdAndDelete(loser._id)
            res.status(200).json({ message: resultMessage })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - competeCars error` })
        }
    }
}

export default Controller