import mongoose from "mongoose"

const carSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    brand: { type: String },
    name: { type: String },
    year: { type: Number },
    image: { type: String },
    hp: { type: Number },
}, { versionKey: false })

const car = mongoose.model("cars", carSchema)

export default car
