import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

import { ServerException } from './server.exception'

export const serverExceptionMiddleware: ErrorRequestHandler = (
	err: unknown,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	if (err instanceof ServerException) {
		res.status(err.status).json({ message: err.message })
	} else {
		res.status(500).json({ message: 'unexpected server error' })
	}
}
