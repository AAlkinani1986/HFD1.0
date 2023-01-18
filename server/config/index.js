import pino from 'pino'
import PinoPretty from 'pino-pretty'
import { config } from 'dotenv'
const logger = pino(PinoPretty())
config()

const index = {
  database: {
    dsn: process.env.MONGODB_URI,
    status: {
      connected: false,
      error: false,
    },
  },
  JWTSECRET: process.env.JWTSECRET,
  logger,
}
export default index
