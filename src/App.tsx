import { type FC } from 'react'
import { NewTodoForm, TodoList, TodoManagement } from './components'
import { useTodo } from './hooks'
import styles from './App.module.scss'

export const App: FC = () => {
  const todo = useTodo()

  return (
    <div className={styles.container}>
      <h1>todos</h1>
      <div className={styles.todos}>
        <NewTodoForm
          addNewTodo={todo.addNewTodo}
          isTodosVisible={todo.isTodosVisible}
          toggleTodosVisible={todo.toggleTodosVisible}
        />
        {todo.isTodosVisible && (
          <>
            <TodoList todos={todo.filteredTodos} toggleTodoComplete={todo.toggleTodoComplete} />
            <TodoManagement
              todosLeft={todo.todosLeft}
              todoFilter={todo.todoFilter}
              updateTodoFilter={todo.updateTodoFilter}
              clearCompletedTodos={todo.clearCompletedTodos}
            />
          </>
        )}
      </div>
    </div>
  )
}
