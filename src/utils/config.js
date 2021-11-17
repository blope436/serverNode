import dotenv from 'dotenv'
import joi from 'joi'

dotenv.config();

const envSchema = joi.object().keys({
    NODE_ENV: joi.string().valid('development', 'production').required(),
    PORT: joi.number().positive().required()

})
.unknown()

const {value:env, error} = envSchema.prefs({errors: {label: 'key'}}).validate(process.env)


if (error)
{
    throw new Error('Config validation errorL ${error.message;}')
}

export default {nodeEnv: env.NODE_ENV, port: env.PORT}
