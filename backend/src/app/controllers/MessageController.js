import Message from '../schemas/Message'
class MessageController {
  async store (req, res) {
    try {
      const message = await Message.create(req.body)
      await message.save()
      return res.status(200).json(message)
    } catch (error) {
      return res.status(500).send({ error })
    }
  }

  async index (req, res) {
    const { username, order = 'asc' } = req.query
    try {
      const mensagens = await Message.find({ author: { $regex: `.*${username}.*`, $options: 'i' } }).sort({ createdAt: order })
      return res.json({ mensagens })
    } catch (error) {
      return res.status(401).json({ erro: true })
    }
  }

  async delete (req, res) {
    try {
      const { id } = req.query
      const foundMessage = Message.findOne({ _id: id })
      if (!foundMessage) {
        return res.status(400).json({ error: 'Message not found' })
      }
      await foundMessage.remove()
      return res.status(200).json({ success: 'Message deleted' })
    } catch (error) {
      return res.status(404).json({ error: 'Message deletion failed' })
    }
  }
}

export default new MessageController()
