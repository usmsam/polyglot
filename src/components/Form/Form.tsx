import React, { FC, FormEvent } from 'react'

import s from './Form.module.scss'

interface FormProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode
}

export const Form: FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form className={s.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
