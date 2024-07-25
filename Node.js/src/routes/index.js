import express from "express"
import cars from "./General.js" // Importing a router object here
import favorites from "./General.js" // Importing a router object here
import race from "./General.js" // Importing a router object here

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200))

    app.use(express.json())
    app.use(cars)
    app.use(favorites)
    app.use(race)
}

export default routes