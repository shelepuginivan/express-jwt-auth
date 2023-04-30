import { NextFunction, Request, Response, Router } from 'express'

import { authController } from './auth.module'

const authRouter = Router()

authRouter.post(
	'/register',
	(req: Request, res: Response, next: NextFunction) =>
		authController.registerUser(req, res, next)
)
authRouter.post(
	'/login',
	(req: Request, res: Response, next: NextFunction) =>
		authController.login(req, res, next)
)

export default authRouter
