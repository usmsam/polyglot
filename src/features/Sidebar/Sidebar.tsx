import { FC } from 'react'
import { Icon } from 'components'

import cn from 'classnames'

import s from './Sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface SidebarPropsItem {
  icon: string
  value: number
  label: string
  link: string
}

export interface SidebarPropsList {
  items: SidebarPropsItem[]
  active: number
  onClick: (index: number) => void
}

export const Sidebar: FC<SidebarPropsList> = ({ items, active, onClick }) => {
  const router = useRouter()
  return (
    <ul className={s.sidebar}>
      {items.map(({ icon, value, label, link = '' }, index) => (
        <Link href={link} key={value}>
          <li
            onClick={() => onClick(index)}
            className={cn(s.sidebarList, {
              [s.sidebarListActive]: router.pathname === link,
            })}
          >
            <div className={s.sidebarIcon}>
              <Icon
                name={icon}
                fill={router.pathname === link ? 'primary' : 'black'}
              />
            </div>
            {label}
          </li>
        </Link>
      ))}
    </ul>
  )
}
