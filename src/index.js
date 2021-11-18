import express from 'express'

import helmet from 'helmet'

import cors from 'cors'

import config from  './utils/config'

import logger from './utils/logger'

import errors from './utils/errors'


import router from './routes'

const app = express()

app.use(logger.middleware)
app.use(helmet())
app.use(cors({
    origin: config.origin,
}))

app.use(router)

app.use(errors.notFound)
app.use(errors.errorHandler)

app.listen(config.port)