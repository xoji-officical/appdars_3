import { useState, useRef } from 'react'
import Modal from './companent/Modal'
import './App.css'

function App() { 

  
    
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  const [showMadal, setShowMadal] = useState({
    show: false,
    todoId: "",
})

  function innpa(e){
    e.preventDefault();
    
    let date = new Date()

    let newTado = {
      id:date.getTime(),
      text,
      completed: false,
    };

    
    setTodos((prev) => [...prev, newTado])
    setText("");
  }
  console.log(todos);

  function deleteItem(itemId) {
    setTodos((prev) => prev.filter((todo) => todo.id !== itemId))
  }
  return (
    <>
      <div className='add sec-add'>
      <form onSubmit={innpa}>
        <input value={text} required type='text' onChange={(e) => {
          setText(e.target.value)
        }} />
        <button className='btn1' type='submit'>Submit</button>
      </form>
      <ul className='tod-lis'>
        {todos.length 
         ? todos.map(({id, text, completed}, ind) => {
            return <li key={id} className='ull1'>
              <p className='app1'>{text}</p> 
              <button className='btn1' onClick={() => setShowMadal((prev) => {
                return {...prev, show: true, todoId: id};
              })}>Edit</button>
              <button onClick={() => deleteItem(id)} className='btn1'>delet</button>
            </li> 
            
          }) : "no todos :("
        }
        
      </ul>
      
    </div>
    {showMadal.show && <Modal setTodos={setTodos} itemId={showMadal.todoId} closeModal={setShowMadal} />}
    </>
  )
}

export default App
