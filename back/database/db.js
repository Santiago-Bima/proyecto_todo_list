import { Sequelize } from 'sequelize'

const db = Sequelize('todoListDb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export default db