import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model('Message', MessageSchema)
