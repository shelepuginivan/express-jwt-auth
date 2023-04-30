import { Role, User } from './user'

export class UserDto {
	username: string
	email: string
	role: Role

	constructor(user: Omit<User, 'password'>) {
		this.username = user.username
		this.email = user.email
		this.role = user.role
	}
}
