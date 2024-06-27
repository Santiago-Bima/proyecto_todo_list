import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import router from './routes/routes.js'

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use('/todos', router)

try {
  await db.authenticate()
  console.log('Conexion exitosa a la base de datos');
} catch (error) {
 console.log(`El error de la conexion es: ${error}`); 
}

app.get('/', (req,res) => {
  res.send('Hola mundo')
})

app.listen(port, ()=> {
  console.log(`Server up running in http://localhost:${port}/`);
})