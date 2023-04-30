import { NextFunction, Request, Response, Router } from 'express'

import { adminController } from './admin.module'

const adminRouter = Router()

adminRouter.get(
	'/all-users',
	(req: Request, res: Response, next: NextFunction) =>
		adminController.allUsers(req, res, next)
)

export default adminRouter
