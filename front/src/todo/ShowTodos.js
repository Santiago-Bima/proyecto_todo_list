import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URL = 'https://localhost:8000/todos/'

const CompShowTodos = () => {
  const [todos, setTodo] = useState([])

  useEffect(() => {
    getTodos()
  }, [])


  const getTodos = async () => {
    const res = await axios.get(URL)
    setTodo(res.data)
  }

  const deleteTodo = async (id) => {
    await axios.delete(`${URL}${id}`)
    getTodos()
  }

  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <table className='table'>
            <thead className='table-primary'>
              <tr>
                <th>Titulo</th>
                <th>Contenido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              { todos.map(todo => {
                <tr key={todo.id}>
                  <td>{todo.titulo}</td>
                  <td>{todo.contenido}</td>
                  <td>
                    <Link to={`/edit/${todo.id}`} className='btn btn-info'>Editar</Link>
                    <button onClick={()=>{deleteTodo(todo.id)}} className='btn btn-danger'>Eliminar</button>
                  </td>
                </tr>
              }) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CompShowTodos