import './style.css'
const TodoList = ({lista, HandleTodo}) => {
     console.log(lista)
    return(
        <ul className="Container1">
            {lista.map((item, index) => (
                <div className="lista" key={index}>
                <li className="item" >{item} </li>
                <button className="botao-1" onClick={() => HandleTodo(item)}>Concluído</button>
                </div>

            ))}
        </ul>
    )
};

export default TodoList