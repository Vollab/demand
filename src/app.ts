import cookie_parser from 'cookie-parser'
import express from 'express'
import 'express-async-errors'

import { test_router } from './routes'

import { error_handler } from 'common/middlewares'
import { NotFoundError } from 'common/errors'

const app = express()

app.set('trust proxy', true)

app.use(express.json(), cookie_parser())

app.use(test_router)

app.all('*', () => {
	throw new NotFoundError('Route not found')
})

app.use(error_handler)

export { app }
