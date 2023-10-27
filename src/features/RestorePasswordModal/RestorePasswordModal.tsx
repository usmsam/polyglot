import { FC, FormEvent, useState } from 'react'
import cn from 'classnames'

import { ModalWrapper } from 'components/Modal/ModalWrapper'
import { Button, Form, Input } from 'components'

import { isValidEmail } from 'shared/helpers/emailValidator'

import s from './restorePasswordModal.module.scss'

interface RestorePasswordModalProps {
  onSubmit: (email: string) => void
  isOpen: boolean
  onClose: () => void
}

export const RestorePasswordModal: FC<RestorePasswordModalProps> = ({
  onSubmit,
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('')
  const [isValidValue, setIsValidValue] = useState(false)

  function handleSetEmail(value: string) {
    setEmail(value)
    setIsValidValue(isValidEmail(email))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!isValidEmail(email)) {
      return
    }
    onSubmit(email)
  }
  return (
    <ModalWrapper className={s.wrapper} isOpen={isOpen} onClose={onClose}>
      <form className={s.form} onSubmit={handleSubmit}>
        <h1 className={s.title}>Забыли пароль?</h1>
        <div className={s.content}>
          <label className={s.lable} htmlFor='email'>
            Электронная почта
          </label>
          <Input
            className={cn(s.emailInput, { [s.valid]: isValidValue })}
            value={email}
            onChange={handleSetEmail}
            name='email'
            placeholder='Введите адрес электронной почты'
          />
          <Button
            className={s.submitBtn}
            type='submit'
            onClick={() => {}}
            variant='primary'
            disabled={!isValidValue}
          >
            Восстановить
          </Button>
        </div>
      </form>
    </ModalWrapper>
  )
}
