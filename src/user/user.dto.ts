import { Role, User } from './user'

export class UserDto {
	username: string
	email: string
	role: Role

	constructor(user: User) {
		this.username = user.username
		this.email = user.email
		this.role = user.role
	}
}
