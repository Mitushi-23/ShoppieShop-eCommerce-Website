const bcrypt = require('bcryptjs')

const Users = [
  {
    name: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'bla',
    email: 'bla@bla.com',
    password: bcrypt.hashSync('blabla', 10),
    isAdmin: false,
  },
  {
    name: 'shivaay',
    email: 'shivaay@gmail.com',
    password: bcrypt.hashSync('blabla', 10),
  },
]

module.exports = Users;