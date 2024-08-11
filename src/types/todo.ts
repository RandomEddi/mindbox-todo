export interface Todo {
  id: number
  title: string
  isCompleted: boolean
}

export type TodoFilter = 'All' | 'Active' | 'Completed'
