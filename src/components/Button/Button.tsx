import { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  onClick: () => void
  className?: string
  variant: 'primary' | 'secondary'
  type?: 'submit' | 'reset' | 'button' | undefined
}
export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
  type,
}) => {
  return (
    <button
      className={cn(s.button, s[variant], className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
