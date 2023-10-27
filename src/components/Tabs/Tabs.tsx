import { FC } from 'react'
import cn from 'classnames'

import s from './tabs.module.scss'

export interface TabsItem {
  label: string
  value: number
}

interface TabsProps {
  items: TabsItem[]
  onClick: (value: number) => void
  value: number
}

export const Tabs: FC<TabsProps> = ({ items, onClick, value }) => {
  return (
    <div className={s.tabs}>
      {items.map(item => (
        <span
          key={item.label}
          className={cn(s.button, { [s.active]: item.value === value })}
          onClick={() => onClick(item.value)}
        >
          {item.label}
        </span>
      ))}
    </div>
  )
}
