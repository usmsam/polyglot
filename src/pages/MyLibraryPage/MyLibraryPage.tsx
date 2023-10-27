import { FC, useState } from 'react'
import { BookList } from 'components'
import { Tabs, TabsItem } from 'components/Tabs/Tabs'
import { books } from 'shared/mocks/books'

import s from './myLibraryPage.module.scss'

const menu: TabsItem[] = [
  { value: 1, label: 'В процессе' },
  { value: 2, label: 'Завершенные' },
]

export const MyLibraryPage: FC = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className={s.booksWrap}>
      <h2 className={s.booksTitle}>Моя библиотека</h2>
      <div className={s.booksTabs}>
        <Tabs items={menu} value={activeTab} onClick={setActiveTab} />
      </div>
      <div className={s.booksList}>
        <BookList
          data={books}
          onDelete={id => console.log(`Deleted book id: ${id}`)}
        />
      </div>
    </div>
  )
}
