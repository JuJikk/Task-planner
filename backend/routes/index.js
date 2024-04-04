import express from 'express'
import mongoose from "mongoose";
import router from "../router.js";
import cors from "cors"
import 'dotenv/config'

const port = process.env.PORT
const db_url = process.env.DB_URL

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/api', router)
app.use(cors({
  origin: 'http://localhost:3000/'
}));

async function startApp() {
  try {
    await mongoose.connect(db_url)
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  } catch (e) {
    console.log(e)
  }
}

startApp()
