import express from "express"
import userRoutes from "./routes/user.routes.js"

const app = express()

app.use(express.json())

app.use("/users", userRoutes)

app.listen(3005, () => {
  console.log("Server running on port 3005")
})