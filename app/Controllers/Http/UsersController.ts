// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async create() {
    return {
      message: 'user created',
    }
  }
}