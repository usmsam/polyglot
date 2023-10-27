import { FC, useRef, useState } from 'react'

import s from '../header.module.scss'
import cn from 'classnames'
import { Icon } from 'components'
import Link from 'next/link'

interface MobileSidebarProps {
  userName: string
  closeSidebar: () => void
  routes: { link: string; label: string; value: number }[]
  className: string
}

export const MobileSidebar: FC<MobileSidebarProps> = ({
  userName,
  closeSidebar,
  routes,
  className,
}) => {
  const [currActive, setCurrActive] = useState(1)
  function handleSetActive(text: number) {
    setCurrActive(text)
    closeSidebar()
  }

  return (
    <aside className={cn(s.sidebar, className)}>
      <div className={s.sidebarContainer}>
        <div className={s.sidebarTop}>
          <div className={s.sidebarBrandIconWrapper}>
            <Icon name='brandIcon' fill='primary' />
          </div>
          <button className={s.sibebarCloseBtn} onClick={closeSidebar}>
            <Icon name='cross' fill='primary' />
          </button>
        </div>
        <div className={s.sidebarDevider}></div>
        <nav className={s.sidebarNavigation}>
          <ul>
            {routes.map(({ label, link, value }, i) => {
              return (
                <Link key={i} href={link}>
                  <li>
                    <a
                      className={cn({ [`${s.active}`]: value === currActive })}
                      onClick={() => handleSetActive(value)}
                    >
                      {label}
                    </a>
                  </li>
                </Link>
              )
            })}
          </ul>
        </nav>
        <div className={s.sidebarDevider}></div>
        <div className={s.sidebarBottom}>
          <div className={s.profile}>
            <p>{userName}</p>
            <button>
              <Icon name='arrowUp' fill='grey' />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
