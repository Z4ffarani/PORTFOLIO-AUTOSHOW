import express from "express"
import connectDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js"
import cors from "cors"

const connection = await connectDatabase()

connection.on("error", (error) => {
    console.error("MongoDB doesn't listen", error)
})

connection.once("open", () => {
    console.log("MongoDB listening")
})

const app = express()

app.use(cors({ origin: "http://localhost:3000" }))
app.use("/images", express.static("./src/images"))

routes(app)

export default app