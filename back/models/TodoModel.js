import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const TodoModel = db.define('todos', {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING }
})


export default TodoModel