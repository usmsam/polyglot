import { FC } from 'react'

import s from './header.module.scss'
import cn from 'classnames'
import { Icon } from 'components'
import Link from 'next/link'

export const HeaderLanding: FC = () => {
  return (
    <header className={cn(s.header, s.landing)}>
      <div className={s.container}>
        <Link href={'/'}>
          <Icon fill='white' name='brandIcon' />
        </Link>
        <nav className={s.navbar}>
          <ul>
            <li>
              <a href="#info">Что это</a>
            </li>
            <li>
              <a href='#socials'>Соц. сети</a>
            </li>
            <li>
              <Link href={"/login"}>
              Войти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
