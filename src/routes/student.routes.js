import express from 'express'

import { addStudent } from '../controllers/students.controllers.js'

const router = express.Router()

router.post('/', addStudent) // ADD a new student



export default router