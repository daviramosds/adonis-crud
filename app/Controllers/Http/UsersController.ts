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

    return response.status(201).json({
      user: newUser,
    })
  }

  public async getAll({ response }: HttpContextContract) {
    const users = await User.all()

    return response.status(200).json({
      users: users,
    })
  }

  public async getOne({ request }: HttpContextContract) {
    console.log(request.param('id'))

    const user = await User.findBy('id', request.param('id'))

    return {
      user: user,
    }
  }
}
