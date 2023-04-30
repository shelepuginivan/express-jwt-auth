import { BadRequest } from '../exception/server.exception'
import { TokenService } from '../token/token.service'
import { Role, User } from '../user/user'
import { UserDto } from '../user/user.dto'
import userModel from '../user/user.model'
import { UserService } from '../user/user.service'

export class AuthService {
	constructor(
		private readonly tokenService: TokenService,
		private readonly userService: UserService
	) {}

	async registerUser(username: string, email: string, password: string) {
		const role: Role = 'user'

		const jwt = this.tokenService.sign({
			email,
			username,
			password,
			role
		})

		const newUser = {
			username,
			email,
			password,
			role
		}

		if (await this.userService.exists(newUser)) {
			throw new BadRequest('user with same username or email already exists')
		}

		const createdUser = await userModel.create(newUser)

		return {
			jwt,
			user: new UserDto(createdUser as User)
		}
	}
}
