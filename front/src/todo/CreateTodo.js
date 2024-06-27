import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = 'http://localhost:8000/todos/'


const CompCreateTodo = () => {
  const [titulo, setTitulo] = useState('')
  const [contenido, setContenido] = useState('')
  const navigate = useNavigate()

  const guardar = async e => {
    e.preventDefault()
    await axios.post(URL, {titulo: titulo, contenido: contenido})
    navigate('/')
  }

  return (
    <div>
      <h1>Crear TODO</h1>
      <form onSubmit={guardar}>
        <div className='mb-3'>
          <label className='form-label'>Titulo:</label>
          <input value={titulo} onChange={e => {setTitulo(e.target.value)}} type='text' className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Contenido:</label>
          <textarea value={contenido} onChange={e => {setContenido(e.target.value)}} type='text' className='form-control'></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>
    </div>
  )
}

export default CompCreateTodo