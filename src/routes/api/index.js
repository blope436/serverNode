import { Router } from 'express'

import auth from '../../utils/auth'

import todos from './todo'

const router = Router()

router.use(auth.authenticate('local', {session: false}))

router.use('/todos', todos)

export default router