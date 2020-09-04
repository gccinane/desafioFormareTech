import jwt from 'jsonwebtoken'

import User from '../schemas/User'
class SessionController {
  async store (req, res) {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    const { isAdmin } = user
    if (!user) {
      return res.status(401).json({ error: 'User  not found' })
    }

    if (!(await user.validatePassword(password))) {
      return res.status(401).json({ error: 'Password does not match' })
    }

    const { _id } = user

    return res.json({
      user: {
        _id,
        username,
        isAdmin
      },
      token: jwt.sign({ _id }, '1daec0f91ecb5ecd3533ff1d30f4239c', {
        expiresIn: '7d'
      })
    })
  }
}

export default new SessionController()
