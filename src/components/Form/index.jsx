import {useState} from 'react'
import './style.css'
export default function Form ({addTodo}) {
    const [currentTodo, setCurrentTodo] = useState ('')
    console.log(currentTodo)
return(
    <div className="container">
    <input className="input" placeholder="Digite uma tarefa" value={currentTodo} onChange={(e) => setCurrentTodo(e.target.value)}></input>
    <button className="botao" onClick={() =>addTodo(currentTodo, setCurrentTodo)}>Adicionar</button>
    </div>
)
};