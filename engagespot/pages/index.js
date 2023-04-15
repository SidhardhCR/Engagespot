import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Engagespot } from '@engagespot/react-component';
import Nav from "./Nav";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <main >
      <div className="App">
      <Nav />
        <Nav.NavItem>Home</Nav.NavItem>
        <Nav.NavItem>About</Nav.NavItem>
        <Nav.NavItem>
        <Engagespot apiKey="2kbavat2v25kincd9ph17c" userId="Sid" />
</Nav.NavItem>
        </div>
      <form className="flex min-h-screen flex-col items-center justify-between p-24 custom-img bg-fixed bg-cover bg-center">
      <div >
      <h1 className='text-black px-16'>To-do List</h1>
      <br></br>
     
      <input
      color='black'
      
      enterKeyHint='Enter'
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <br></br>
      <button className='border text-black py-2 px-16' type='button' onClick={addTodo} >Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className='flex'>
            <h2 className='text-black'>{index }{'.\n\n'}{todo}</h2>
            <button className='border text-black px-10' onClick={() => deleteTodo(index)}>     Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </form>
  
    </main>
  )
}
