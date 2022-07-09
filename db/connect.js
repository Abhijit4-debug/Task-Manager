const mongoose = require('mongoose')




const connectstring='mongodb+srv://geekjit:missiongatE@cluster0.xtecg.mongodb.net/Task-Manager?retryWrites=true&w=majority'
const connectDB = (url) => {
    return mongoose.connect(connectstring, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
  }
  module.exports = connectDB
