import express from 'express'
import "express-async-errors"

import { routes } from './routes'
import { errorHandling } from '@/middlewares/error-handling'

const app = express()

app.use(express.json())

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use(routes)
app.use(errorHandling)

export { app }