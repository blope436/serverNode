import express from 'express'

import helmet from 'helmet'

import cors from 'cors'

import config from  './utils/config'

import logger from './utils/logger'

import errors from './utils/errors'

const app = express()

app.use(logger.middleware)
app.use(helmet())
app.use(cors({
    origin: config.origin,
}))

app.get('/',(req, res)=>{
    logger.log.success('Calling Root')
    res.send({msg:'Hello There'})
})

app.use(errors.notFound)
app.use(errors.errorHandler)

app.listen(config.port)