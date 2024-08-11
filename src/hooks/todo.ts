import { useState, useEffect, useMemo } from 'react'
import { getFromLocalStorage, setToLocalStorage } from '../utils'
import { Todo, TodoFilter } from '../types'

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>(getFromLocalStorage('todos', []))
  const [todoFilter, setTodoFilter] = useState<TodoFilter>('All')
  const [isTodosVisible, setIsTodosVisible] = useState(true)

  const addNewTodo = (title: string) => {
    setTodos((prevTodos) => [{ id: Math.random(), title, isCompleted: false }, ...prevTodos])
  }

  const toggleTodoComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)),
    )
  }

  const toggleTodosVisible = () => {
    setIsTodosVisible((prevVisible) => !prevVisible)
  }

  const updateTodoFilter = (filter: TodoFilter) => {
    setTodoFilter(filter)
  }

  const clearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted))
  }

  useEffect(() => {
    setToLocalStorage('todos', todos)
  }, [todos])

  const filteredTodos = useMemo(() => {
    switch (todoFilter) {
      case 'Active':
        return todos.filter((todo) => !todo.isCompleted)
      case 'Completed':
        return todos.filter((todo) => todo.isCompleted)
      default:
        return todos
    }
  }, [todos, todoFilter])

  const todosLeft = useMemo(() => {
    return todos.filter((todo) => !todo.isCompleted).length
  }, [todos, filteredTodos])

  return {
    todos,
    todoFilter,
    isTodosVisible,
    addNewTodo,
    toggleTodoComplete,
    toggleTodosVisible,
    updateTodoFilter,
    clearCompletedTodos,
    filteredTodos,
    todosLeft,
  }
}
