import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const { name, email, password } = request.only(['name', 'email', 'password'])

    const newUser = await User.create({
      name,
      email,
      password,
    })

    return {
      user: newUser,
    }
  }
}
