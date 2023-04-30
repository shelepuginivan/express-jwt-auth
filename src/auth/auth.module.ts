import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'
import { TokenService } from '../token/token.service'
import { AuthController } from './auth.controller'

const tokenService = new TokenService()
const userService = new UserService()
const authService = new AuthService(tokenService, userService)

export const authController = new AuthController(authService)
