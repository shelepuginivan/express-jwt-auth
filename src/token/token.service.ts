import { JsonWebTokenError, sign, verify } from 'jsonwebtoken'

import { Unauthorized } from '../exception/server.exception'

export class TokenService {
	sign(payload: object) {
		return sign(payload, process.env.JWT_SECRET || '', {
			expiresIn: process.env.JWT_EXPIRE_TIME || '30d'
		})
	}

	verify(token?: string) {
		if (!token) {
			throw new Unauthorized('jwt required')
		}

		try {
			return verify(token, process.env.JWT_SECRET || '')
		} catch (error) {
			if (error instanceof JsonWebTokenError) {
				throw new Unauthorized(error.message)
			}

			throw error
		}
	}
}
