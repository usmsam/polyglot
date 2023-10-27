import { FC, useRef, useState } from 'react'

import s from './header.module.scss'
import { MobileSidebar } from './MobileSidebar/MobileSidebar'
import { Icon } from 'components'
import cn from 'classnames'
import Link from 'next/link'

interface HeaderLibraryProps {
  userName: string
}

export const HeaderLibrary: FC<HeaderLibraryProps> = ({ userName }) => {
  const [isBurgerShown, setIsBurgerShown] = useState(false)
  return (
    <header className={s.header}>
      <MobileSidebar
        className={cn({ [s.hidden]: !isBurgerShown })}
        userName={userName}
        closeSidebar={() => setIsBurgerShown(false)}
        routes={[
          {
            value: 1,
            label: 'Моя библиотека',
            link: '/mylibrary',
          },
          { value: 2, label: 'Все книги', link: '/allbooks' },
          {
            value: 3,
            label: 'Мои словари',
            link: '/dictionaries',
          },
        ]}
      />
      <div className={s.container}>
        <Link href={'/'}>
          <a className={s.brandIcon}>
            <Icon name='brandIcon' fill='white' />
          </a>
        </Link>
        <div>
          <div className={s.profile}>
            <p>{userName}</p>
            <button className={s.profileButton}>
              <Icon name='arrow' fill='white' />
            </button>
          </div>
          <button
            className={s.burgerButton}
            onClick={() => setIsBurgerShown(v => !v)}
          >
            <Icon name='burger' fill='white' />
          </button>
        </div>
      </div>
    </header>
  )
}
