import { type FC } from 'react'
import { TodoItem } from '..'
import { Todo } from '../../types'
import styles from './TodoList.module.scss'

interface Props {
  todos: Todo[]
  toggleTodoComplete: (id: number) => void
}

export const TodoList: FC<Props> = ({ todos, toggleTodoComplete }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodoComplete={toggleTodoComplete} />
      ))}
    </div>
  )
}
