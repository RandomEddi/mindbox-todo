import { type FC, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
}

export const Button: FC<Props> = ({ isActive, ...props }) => {
  return <button {...props} className={cn(styles.button, { [styles.active]: isActive }, props.className)} />
}
