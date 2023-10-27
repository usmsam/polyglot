import { FC } from 'react'

import cn from 'classnames'

import s from './input.module.scss'

interface InputProps {
  value: string
  onChange: (value: string) => void
  type?: string
  name?: string
  placeholder?: string
  ref?: React.RefObject<HTMLInputElement>
  autofocus?: boolean
  className?: string
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  type,
  name,
  placeholder,
  ref,
  autofocus,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      ref={ref}
      autoFocus={autofocus}
      className={cn(s.input, className)}
      placeholder={placeholder}
      onChange={ev => onChange(ev.target.value)}
    />
  )
}
