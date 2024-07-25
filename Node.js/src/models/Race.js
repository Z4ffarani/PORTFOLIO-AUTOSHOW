import mongoose from "mongoose"

const raceSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    brand: { type: String },
    name: { type: String },
    year: { type: Number },
    image: { type: String },
    hp: { type: Number },
    number: { type: Number }
}, { versionKey: false })

const raceCar = mongoose.model("racecars", raceSchema)

export default raceCar
