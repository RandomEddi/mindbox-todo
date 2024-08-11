import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { App } from '../App'

describe('todo', () => {
  test('Добавление todo', () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/what needs to be done\?/i)

    fireEvent.change(inputElement, { target: { value: 'New Task' } })
    fireEvent.submit(inputElement)

    const todoItem = screen.getByText('New Task')
    expect(todoItem).toBeInTheDocument()
  })

  test('Нажатие на checkbox', () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/what needs to be done\?/i)

    fireEvent.change(inputElement, { target: { value: 'New Task' } })
    fireEvent.submit(inputElement)

    const todoItem = screen.getByText('New Task')
    const checkbox = todoItem.previousElementSibling?.querySelector('input[type="checkbox"]')

    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox as HTMLElement)

    expect(checkbox).toBeChecked()
  })

  test('Фильтрация todo', () => {
    render(<App />)

    const inputElement = screen.getByPlaceholderText(/what needs to be done\?/i)

    fireEvent.change(inputElement, { target: { value: 'Active Task' } })
    fireEvent.submit(inputElement)

    fireEvent.change(inputElement, { target: { value: 'Completed Task' } })
    fireEvent.submit(inputElement)

    const completedTodo = screen.getByText('Completed Task')
    const checkbox = completedTodo.previousElementSibling?.querySelector('input[type="checkbox"]')
    fireEvent.click(checkbox as HTMLElement)

    const activeFilterButton = screen.getByText('Active')
    fireEvent.click(activeFilterButton)

    expect(screen.queryByText('Completed Task')).not.toBeInTheDocument()
    expect(screen.getByText('Active Task')).toBeInTheDocument()

    const completedFilterButton = screen.getByText('Completed')
    fireEvent.click(completedFilterButton)

    expect(screen.queryByText('Active Task')).not.toBeInTheDocument()
    expect(screen.getByText('Completed Task')).toBeInTheDocument()

    const allFilterButton = screen.getByText('All')
    fireEvent.click(allFilterButton)

    expect(screen.getByText('Active Task')).toBeInTheDocument()
    expect(screen.getByText('Completed Task')).toBeInTheDocument()
  })

  test('Очистка выполненных todo', () => {
    render(<App />)

    const inputElement = screen.getByPlaceholderText(/what needs to be done\?/i)

    fireEvent.change(inputElement, { target: { value: 'Task 1' } })
    fireEvent.submit(inputElement)

    fireEvent.change(inputElement, { target: { value: 'Task 2' } })
    fireEvent.submit(inputElement)

    const completedTodo = screen.getByText('Task 2')
    const checkbox = completedTodo.previousElementSibling?.querySelector('input[type="checkbox"]')
    fireEvent.click(checkbox as HTMLElement)

    const clearButton = screen.getByText(/clear completed/i)
    fireEvent.click(clearButton)

    expect(screen.queryByText('Task 2')).not.toBeInTheDocument()
    expect(screen.getByText('Task 1')).toBeInTheDocument()
  })

  test('Видимость todo', () => {
    render(<App />)

    const toggleButton = screen.getByRole('button', { name: /vector/i })

    expect(screen.getByText(/clear completed/i)).toBeInTheDocument()

    fireEvent.click(toggleButton)
    expect(screen.queryByText(/clear completed/i)).not.toBeInTheDocument()

    fireEvent.click(toggleButton)
    expect(screen.getByText(/clear completed/i)).toBeInTheDocument()
  })
})
