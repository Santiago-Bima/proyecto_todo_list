import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const TodoModel = db.define('todos', {
  titulo: { type: DataTypes.STRING },
  contenido: { type: DataTypes.STRING }
})


export default TodoModel