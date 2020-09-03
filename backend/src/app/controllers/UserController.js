import User from '../schemas/User'

class UserController {
  async store (req, res) {
    try {
      const user = new User(req.body)
      user.save()
      return res.status(200).json({ success: 'user criado' })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

export default new UserController()
