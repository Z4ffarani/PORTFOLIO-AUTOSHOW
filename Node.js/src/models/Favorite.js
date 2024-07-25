import mongoose from "mongoose"

const favoriteSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    brand: { type: String },
    name: { type: String },
    year: { type: Number },
    image: { type: String },
    hp: { type: Number }
}, { versionKey: false })

const favorite = mongoose.model("favorites", favoriteSchema)

export default favorite
