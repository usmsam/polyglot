import { BookList } from 'components'
import { Tabs, TabsItem } from 'components/Tabs/Tabs'
import { FC, useState } from 'react'
import { books } from 'shared/mocks/books'

import s from './AllBooksPage.module.scss'

const menu: TabsItem[] = [
  { value: 1, label: 'Драмы' },
  { value: 2, label: 'Детские' },
  { value: 3, label: 'Ужасы' },
  { value: 4, label: 'Приключение' },
]

export const AllBooksPage: FC = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className={s.booksWrap}>
      <h2 className={s.booksTitle}>Все книги</h2>
      <div className={s.booksTabs}>
        <Tabs items={menu} value={activeTab} onClick={setActiveTab} />
      </div>
      <div className={s.booksList}>
        <BookList data={books} />
      </div>
    </div>
  )
}
