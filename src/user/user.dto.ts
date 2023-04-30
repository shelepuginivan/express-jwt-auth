import { User } from './user'

export class UserDto extends User {
	constructor(user: User) {
		super(user.username, user.email, user.password, user.role)
	}
}
