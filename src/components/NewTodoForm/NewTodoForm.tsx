import { FormEvent, useState, type FC } from 'react'
import cn from 'classnames'
import styles from './NewTodoForm.module.scss'

interface Props {
  isTodosVisible: boolean
  toggleTodosVisible: () => void
  addNewTodo: (title: string) => void
}

export const NewTodoForm: FC<Props> = ({ isTodosVisible, toggleTodosVisible, addNewTodo }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('')

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    addNewTodo(newTodoTitle)
    setNewTodoTitle('')
  }

  return (
    <form onSubmit={submitHandler} className={styles.newTodoForm}>
      <div className={cn(styles.todosVisibility, { [styles.visible]: isTodosVisible })}>
        <button type='button' onClick={toggleTodosVisible}>
          <img src='/vector.svg' />
        </button>
      </div>
      <input
        className={styles.todoInput}
        placeholder='What needs to be done?'
        value={newTodoTitle}
        onChange={(event) => setNewTodoTitle(event.target.value)}
      />
    </form>
  )
}
