import logo from './logo.svg';
import './App.css';
import CompShowTodos from './todo/ShowTodos'
import CompCreateTodo from './todo/CreateTodo';
import CompEditTodo from './todo/EditTodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowTodos />} />
          <Route path='/crear' element={<CompCreateTodo />} />
          <Route path='/editar/:id' element={<CompEditTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
