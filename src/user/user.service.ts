import { User } from './user'
import userModel from './user.model'

export class UserService {
	async exists(user: User): Promise<boolean> {
		const { username, email } = user

		if (await userModel.findOne({ username })) {
			return true
		}

		return Boolean(await userModel.findOne({ email }))
	}
}
