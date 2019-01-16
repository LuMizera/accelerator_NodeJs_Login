const
  port = process.env.MONGO_PORT || 27017,
  connection = process.env.MONGO_HOST || "mongodb://localhost:" + port + "/recatoweb_db"

module.exports = {
  connection
};