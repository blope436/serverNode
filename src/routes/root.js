import { Router } from 'express'

import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.log.success('Calling from Root')
 
  res.send({ msg: 'Hello There, How are You' })
})

export default router