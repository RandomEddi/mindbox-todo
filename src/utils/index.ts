export const getFromLocalStorage = (key: string, defaultValue?: any) => {
  const item = localStorage.getItem(key)

  return item ? JSON.parse(item) : defaultValue
}

export const setToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
