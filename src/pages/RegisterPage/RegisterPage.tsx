import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button, Form, Input } from 'components'

import logo from '../../../public/assets/img/logo.png'
import mobileLogo from '../../../public/assets/img/vector.png'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import s from './registerPage.module.scss'
import { Register } from 'shared/types/auth'
import { register } from 'shared/api/routes/auth'

interface RegisterFormProps {
  onRegister: (register: Register | Credentials) => void
}
interface Credentials {
  email: string
  password: string
  name: string
}
const RegisterForm: FC<RegisterFormProps> = ({ onRegister }) => {
  const [credentials, setCredentials] = useState<Credentials | Register>({
    email: '',
    password: '',
    name: '',
  })
  const handleChange = (name: keyof Credentials) => (value: string) => {
    setCredentials(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault()
      await register({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        font: 'awesom',
        birthDate: "2023-10-15",
        isBlocked: false,
      })
      onRegister(credentials)
    } catch (error) {
      console.log('Error:', error)
    }
  }

  const handleClick = () => {

  }
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className={s.title}>Регистрация</h2>
      <div className={s.inputGroup}>
        <p>Имя</p>
        <Input
          value={credentials.name}
          onChange={handleChange('name')}
          placeholder='Введите свое имя'
        />
      </div>
      <div className={s.inputGroup}>
        <p>Электронная почта</p>
        <Input
          type='email'
          value={credentials.email}
          onChange={handleChange('email')}
          placeholder='Введите адрес электронной почты'
        />
      </div>
      <div className={s.inputGroup}>
        <p>Пароль</p>
        <Input
          type='password'
          value={credentials.password}
          onChange={handleChange('password')}
          placeholder='Введите пароль'
        />
      </div>
      {/* <div className={s.inputGroup}>
        <p>Повтор пароля</p>
        <Input
          type='password'
          value={credentials.password}
          onChange={handleChange('password')}
          placeholder='Введите пароль снова'
        />
      </div> */}
      <Button
        type='submit'
        variant='primary'
        className={s.button}
        onClick={handleClick}
      >
        Начать
      </Button>
      <div className={s.confirm}>
        <p>
          <input type='checkbox' name='checbox__bottom' />Я согласен{' '}
          <Link href='' className='link'>
            с пользовательским соглашением
          </Link>
        </p>
        <p>
          Есть аккаунт? <Link href={"/login"}>Войдите</Link>
        </p>
      </div>
    </Form>
  )
}

export const RegisterPage: FC = () => {
  const handleRegister = (credentials: Credentials) => { }
  const { width } = useWindowDimensions()
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.logo}>
          {width < 768 ? (
            <div className={s.mobileLogo}>
              <Image src={mobileLogo} width={255} alt='' />
            </div>
          ) : (
            <div className={s.logoMain}>
              <Image src={logo} width={255} height={215} alt='' />
            </div>
          )}
        </div>
        <RegisterForm onRegister={handleRegister} />
      </div>
    </div>
  )
}
