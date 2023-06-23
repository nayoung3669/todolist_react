import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoTemplate from './components/TodoTemplate';
import { TodoList } from './components/TodoList';
import { useRef } from 'react';
import { useCallback } from 'react';

function App() {
  const nextId = useRef(0)
  const [todos, setTodos] = useState([])

  const onAdd = useCallback((todo) => {
    nextId.current += 1
    const newTodo = {
      id: nextId.current,
      title: todo.title,
      text: todo.text,
      done: false,
    }
    setTodos(todos => todos.concat(newTodo))
  }, [])

  const onDelete = useCallback((id) => {
    setTodos(todos =>todos.filter(todo => todo.id !== id))
  }, [])

  const onToggle = useCallback((id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, done : !todo.done} : todo))
  },[])

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInput nextId={nextId} onAdd={onAdd}/>
        <TodoList todos={todos.filter(todo => todo.done === false)} state={"Working...✍🏻"} onDelete={onDelete} onToggle={onToggle}/> 
        <TodoList todos={todos.filter(todo => todo.done === true)} state={"Done!🥳"} onDelete={onDelete} onToggle={onToggle}/> 
      </TodoTemplate>
    </div>
  );
}

export default App;
