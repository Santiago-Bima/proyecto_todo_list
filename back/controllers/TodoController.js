import TodoModel from '../models/TodoModel.js'

export const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.findAll()
    res.json(todos)
  } catch (error) {
    res.json({message: error.message})
  }
}

export const getTodo = async (req, res) => {
  try {
    const todo = await TodoModel.findAll({
      where:{ id:req.params.id }
    })
    res.json(todo[0])
  } catch (error) {
    res.json({message: error.message})
  }
}

export const createTodo = async (req,res) => {
  try {
    await TodoModel.create(req.body)
    res.json({
      'message': 'La tarea fue creada correctamente'
    })
  } catch (error) {
    res.json({message: error.message})
  }
}

export const updateTodo = async (req,res) => {
  try {
    await TodoModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({
      'message': 'La tarea fue editada correctamente'
    })
  } catch (error) {
    res.json({message: error.message})
  }
}

export const deleteTodo = async (req,res) => {
  try {
    await TodoModel.destroy({
      where: { id: req.params.id }
    })
    res.json({
      'message': 'La tarea fue eliminada correctamente'
    })
  } catch (error) {
    res.json({message: error.message})
  }
}