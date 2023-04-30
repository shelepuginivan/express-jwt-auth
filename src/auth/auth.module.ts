import { TokenService } from '../token/token.service'
import { UserService } from '../user/user.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

const tokenService = new TokenService()
const userService = new UserService()
const authService = new AuthService(tokenService, userService)

export const authController = new AuthController(authService)
