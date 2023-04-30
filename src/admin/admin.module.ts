import { TokenService } from '../token/token.service'
import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'

const tokenService = new TokenService()
const adminService = new AdminService(tokenService)

export const adminController = new AdminController(adminService)
