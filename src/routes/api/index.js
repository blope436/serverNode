import { Router } from 'express'

import todos from './todo'

const router = Router()

router.use('/todos', todos)

export default router