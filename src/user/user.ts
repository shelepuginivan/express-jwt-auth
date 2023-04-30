export type Role = 'user' | 'admin'

export class User {
	username: string
	email: string
	password: string
	role: Role

	constructor(username: string, email: string, password: string, role: Role = 'user') {
		this.username = username
		this.email = email
		this.password = password
		this.role = role
	}
}
