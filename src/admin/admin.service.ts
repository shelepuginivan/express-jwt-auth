import { Forbidden } from '../exception/server.exception'
import { TokenService } from '../token/token.service'
import { User } from '../user/user'
import { UserDto } from '../user/user.dto'
import userModel from '../user/user.model'

export class AdminService {
	constructor(private readonly tokenService: TokenService) {}

	async allUsers(token?: string) {
		const payload = this.tokenService.verify(token)

		if (
			!Object.hasOwnProperty.call(payload, 'role') ||
			(payload as Record<'role', string>).role !== 'admin'
		) {
			throw new Forbidden('access denied')
		}

		const users = await userModel.find()

		return users.map(user => new UserDto(user as User))
	}
}
