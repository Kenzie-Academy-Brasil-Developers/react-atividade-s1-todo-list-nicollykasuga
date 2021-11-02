import {useState} from 'react';
import './App.css';
import Form from'./components/Form/index';
import TodoList from'./components/TodoList/index';

function App() {
  const [lista, setLista] =  useState ([]);
console.log(lista)
  function addTodo(newTodo, value) {
    if(newTodo === " "){
      return;
    }
    setLista([...lista, newTodo]);
    value("")
  }

  function HandleTodo(todo){
    setLista(lista.filter((item) =>
      item !== todo))
  }
  return (
    <div className="App">
      <header className="App-header">
       <Form addTodo={addTodo}/>
       <TodoList lista={lista} HandleTodo={HandleTodo} />
      </header>
    </div>
  );
}

export default App;
