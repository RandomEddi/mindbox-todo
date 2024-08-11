import { type FC } from 'react'
import { Todo } from '../../types'
import { Checkbox } from '..'
import cn from 'classnames'
import styles from './TodoItem.module.scss'

interface Props {
  todo: Todo
  toggleTodoComplete: (id: number) => void
}

export const TodoItem: FC<Props> = ({ todo, toggleTodoComplete }) => {
  return (
    <div
      className={cn(styles.todo, {
        [styles.completed]: todo.isCompleted,
      })}
    >
      <div className={styles.todoCheckbox}>
        <Checkbox isChecked={todo.isCompleted} toggleChecked={() => toggleTodoComplete(todo.id)} />
      </div>
      <p className={styles.todoTitle}>{todo.title}</p>
    </div>
  )
}
