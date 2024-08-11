import { type FC } from 'react'
import styles from './Checkbox.module.scss'

interface Props {
  isChecked: boolean
  toggleChecked: () => void
}

export const Checkbox: FC<Props> = ({ isChecked, toggleChecked }) => {
  return (
    <button className={styles.checkbox} onClick={toggleChecked}>
      {isChecked && <img src='/check_mark.svg' />}
    </button>
  )
}
