import bodyParser from 'body-parser'
import { config } from 'dotenv'
import express, { json } from 'express'
import { connect } from 'mongoose'
import { join } from 'path'

import authRouter from './auth/auth.router'
import { serverExceptionMiddleware } from './exception/server-exception.middleware'
import adminRouter from './admin/admin.router'

config({
	path: join(__dirname, '..', '.env')
})

const app = express()

app.use(json())
app.use(bodyParser.json())
app.use('/admin', adminRouter)
app.use('/auth', authRouter)
app.use(serverExceptionMiddleware)

const start = async () => {
	const port = Number(process.env.PORT) || 8000
	const mongoUri = process.env.MONGO_URI

	if (!mongoUri) {
		throw Error('Failed to start app - MongoDB URI were not specified')
	}

	await connect(mongoUri)
	app.listen(port)
	console.log(`Server started on port ${port}...`)
}

start().catch(error => console.log(error))
