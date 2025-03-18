import { useState } from 'react'
// import { Button } from "/components/ui/button"
// import { Input } from "/components/ui/input"
// import { Label } from "/components/ui/label"
// import { Checkbox } from "/components/ui/checkbox"
// import { Trash } from "lucide-react"

export default function TodoList() {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="new-todo" className="block text-sm font-medium leading-6 text-gray-900">
            Add a new todo
          </label>
          <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              type="text"
              id="new-todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-1 block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button type="button" onClick={addTodo} className="rounded-l-none">
              Add
            </button>
          </div>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
              <div className="flex items-center">
                {/* <Checkbox
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onCheckedChange={() => toggleCompletion(todo.id)}
                  className="mr-2"
                /> */}
                <label htmlFor={`todo-${todo.id}`} className={todo.completed ? 'line-through' : ''}>
                  {todo.text}
                </label>
              </div>
              <button style={{ color: 'red' }} onClick={() => removeTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}