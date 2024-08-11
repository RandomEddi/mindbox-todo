import { type FC } from 'react'
import { Button } from '..'
import { TodoFilter } from '../../types'
import styles from './TodoManagement.module.scss'

interface Props {
  todosLeft: number
  todoFilter: TodoFilter
  updateTodoFilter: (filter: TodoFilter) => void
  clearCompletedTodos: () => void
}

const filterButtons: TodoFilter[] = ['All', 'Active', 'Completed']

export const TodoManagement: FC<Props> = ({ todosLeft, todoFilter, updateTodoFilter, clearCompletedTodos }) => {
  return (
    <div className={styles.todoManagement}>
      <p className={styles.todoLeft}>{todosLeft} items left</p>
      <div className={styles.todoFilter}>
        {filterButtons.map((filterButton) => (
          <Button
            key={filterButton}
            isActive={todoFilter === filterButton}
            onClick={() => {
              updateTodoFilter(filterButton)
            }}
          >
            {filterButton}
          </Button>
        ))}
      </div>
      <Button onClick={clearCompletedTodos} className={styles.todoClear}>
        Clear completed
      </Button>
    </div>
  )
}
