import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = 'http://localhost:8000/todos/'

const CompEditTodo = () => {
  const [titulo, setTitulo] = useState('')
  const [contenido, setContenido] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()

  const update = async e => {
    e.preventDefault()
    await axios.put(URL+id, {
      titulo: titulo,
      contenido: contenido
    })
    navigate('/')
  }

  useEffect(() => {
    getTodoById()
  }, [])

  const getTodoById = async () => {
    const res = await axios.get(URL+id)
    setTitulo(res.data.titulo)
    setContenido(res.data.contenido)
  }

  return (
    <div>
      <h1>Editar TODO</h1>
      <form onSubmit={update}>
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

export default CompEditTodo