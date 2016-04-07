module.exports = {
  PORT: process.env.PORT || 3000,
  databaseUrl: 'mongodb://localhost/projectFour',
  secret: 'hfjkasfjsaefj',
  appUrl: process.env.MONGOLAB_URI || 'mongodb://localhost/projectFour'
}
