import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')

  
  function handleClick(name){
    setName(name)
  }


  return (
    <>
      <Header/>
      <Menu/>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => handleClick('gabriel')}>
          Hola señor {name}  
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
