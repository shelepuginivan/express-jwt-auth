import { NextFunction, Request, Response } from 'express'

import { AdminService } from './admin.service'

export class AdminController {
	constructor(private readonly adminService: AdminService) {}

	async allUsers(req: Request, res: Response, next: NextFunction) {
		try {
			const { jwt } = req.cookies
			const users = await this.adminService.allUsers(jwt)

			res.status(200).json(users)
		} catch (error) {
			next(error)
		}
	}
}
