import { NextFunction, Request, Response } from 'express'

import { AuthService } from './auth.service'

export class AuthController {
	constructor(private readonly authService: AuthService) {}

	async registerUser(req: Request, res: Response, next: NextFunction) {
		try {
			const { username, email, password } = req.body
			const { jwt, user } = await this.authService.registerUser(username, email, password)

			res.cookie('jwt', jwt, {httpOnly: true})
			res.status(200).json(user)
		} catch (error) {
			next(error)
		}
	}

	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const { username, email, password } = req.body
			const { jwt, user } = await this.authService.login(username, email, password)

			res.cookie('jwt', jwt, {httpOnly: true})
			res.status(200).json(user)
		} catch (error) {
			next(error)
		}
	}

	logout(_req: Request, res: Response) {
		res.clearCookie('jwt').status(200).end()
	}
}
