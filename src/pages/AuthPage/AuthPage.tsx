import React, { FC, useEffect, useState } from 'react'
import s from './authPage.module.scss'
import { Button, Form, Input } from '../../components'
import Image from 'next/image'
import logo from '../../../public/assets/img/logo.png'
import mobileLogo from '../../../public/assets/img/vector.png'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import Link from 'next/link'
import { authorize } from 'shared/api/routes/auth'
import Router, { useRouter } from 'next/router'
import { RestorePasswordModal } from 'features'

interface Credentials {
  email: string
  password: string
}

interface LoginFormProps {
  onLogin: (credentials: Credentials) => void
  onOpenModal: () => void
}

const LoginForm: FC<LoginFormProps> = ({ onLogin, onOpenModal }) => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  })

  const handleChange = (name: keyof Credentials) => (value: string) => {
    setCredentials(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    Router.push('/mylibrary')
    // try {
    //   e.preventDefault()
    //   await authorize(credentials)
    //   onLogin(credentials)
    // } catch (error) {
    //   console.log('Error:', error)
    // }
  }

  const handleClick = () => {}

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className={s.title}>Вход</h2>
      <div className={s.inputGroup}>
        <p>Электронная почта</p>
        <Input
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
      <Button
        type='submit'
        variant='primary'
        className={s.button}
        onClick={handleClick}
      >
        Войти
      </Button>
      <div className={s.forgot}>
        <a onClick={onOpenModal} className={s.link}>
          Забыли пароль?
        </a>
        <p>
          Нет аккаунта?{' '}
          <Link href={'/registration'} className={s.link}>
            Зарегистрируйтесь
          </Link>
        </p>
      </div>
    </Form>
  )
}

export const AuthPage: FC = () => {
  const router = useRouter()
  const handleLogin = (credentials: Credentials) => {}
  const { width } = useWindowDimensions()
  const [isOpen, setIsOpen] = useState(false)

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
        <LoginForm
          onLogin={handleLogin}
          onOpenModal={() => setIsOpen(prev => !prev)}
        />
        <RestorePasswordModal
          isOpen={isOpen}
          onClose={() => setIsOpen(prev => !prev)}
          onSubmit={() => {}}
        />
      </div>
    </div>
  )
}
