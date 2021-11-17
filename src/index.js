import express from 'express'
import config from  './utils/config'

const app = express()

app.get('/',(req, res)=>{
    res.send({msg:'Hello There'})
})

app.listen(config.port)