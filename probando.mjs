import express from 'express'
import mongoose from 'mongoose'
const Animal = mongoose.model('Animal', new mongoose.Schema({
    tipo: String,
    estado: String,
}))

const app = express()
const API_KEY = process.env.API_KEY_SECRETA;
const DB_USER = process.env.DB_USER;

mongoose.connect(`mongodb://${DB_USER}:${API_KEY}@monquito:27017/miapp?authSource=admin`)

app.get('/', async (_req, res) => {
console.log('listando...')
const animales = await Animal.find();
return res.send(animales)
})
app.get('/crear', async (_req, res) => {
console.log('creando...')
await Animal.create({ tipo: 'josef', estado: 'haciendo' })
return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))
