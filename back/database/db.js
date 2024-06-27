import { Sequelize } from 'sequelize'

const db = new Sequelize('todoListDb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export default db