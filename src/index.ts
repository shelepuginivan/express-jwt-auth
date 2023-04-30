import { config } from 'dotenv'
import express from 'express'
import { connect } from 'mongoose'
import { join } from 'path'

config({
	path: join(__dirname, '..', '.env')
})

const app = express()

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

