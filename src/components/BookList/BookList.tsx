import { FC } from 'react'
import s from './BookList.module.scss'
import BookItem, { BookItemType } from './BookItem/BookItem'
import cn from 'classnames'

type Props = {
  data: BookItemType[]
  className?: string
  onDelete?: (id: number) => void
}

export const BookList: FC<Props> = ({ data, className, onDelete }) => {
  return (
    <div className={cn(s.list, className)}>
      {data.map(i => (
        <BookItem onDelete={onDelete} {...i} key={i.id} />
      ))}
    </div>
  )
}
