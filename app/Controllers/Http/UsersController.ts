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
    const user = await User.findBy('id', request.param('id'))

    return {
      user: user,
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const { name, email, password } = request.only(['name', 'email', 'password'])

    const user = await User.findBy('id', request.param('id'))

    if (!user) {
      return response.status(404).json({ error: 'User not found' })
    }

    user.name = name
    user.email = email
    user.password = password

    await user.save()

    return response.status(201).json({
      user: user,
    })
  }

  public async delete({ request, response }: HttpContextContract) {
    const user = await User.findBy('id', request.param('id'))

    if (!user) {
      return response.status(404).json({ error: 'User not found' })
    }

    await user.delete()

    return {
      user: user,
    }
  }
}
