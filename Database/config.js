const mongoose = require('mongoose')

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  dbconnection
}