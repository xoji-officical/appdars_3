import {useState} from 'react'

export default function Modal({closeModal, itemId, setTodos}) {
    const [text, setText] = useState("")

    function handleSubmit(event){
        event.preventDefault();

        setTodos((prev) => prev.map((item) => {
          if(item.id === itemId) {
            return {...item, text}
          }
          return item;
        }))
        setText("")
        closeModal((prev) => {
          return {show:false, todoId:null }})
        }

  return (
    <div className='modal'>
        <h4>Edit Modal</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} required onChange={(e) => setText(e.target.value)} />
                <button className='btn1' type='submit'>Submit</button>
            </form>
            <button className='btn1 btn01' onClick={() => closeModal((prev) => {
              return{...prev, show: false, todoId: ""}
            })}>Close</button>
      
    </div>
  )
}