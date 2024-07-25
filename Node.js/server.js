import "dotenv/config"
import app from "./src/App.js"

const PORT = 8000

app.listen(PORT, () => {
    console.log("Back-End server listening")
})

