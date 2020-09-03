import mongoose from 'mongoose'

class Database {
  constructor () {
    this.mongo()
  }

  mongo () {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/desafioFormareTech', {
      useUnifiedTopology: true, useNewUrlParser: true
    })
  }
}

export default new Database()
