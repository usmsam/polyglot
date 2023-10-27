import Image, { StaticImageData } from 'next/image'
import s from './BookItem.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { ReactNode } from 'react'
import { Button } from 'components/Button/Button'
import { Icon } from 'components/Icon/Icon'
import { useRouter } from 'next/router'

export type BookItemType = {
  cover: StaticImageData
  heading: string
  author: string
  genre: string
  progress: number
  id: number
}

interface Props extends BookItemType {
  onDelete?: (id: number) => void
}

const BookItem: React.FC<Props> = ({
  cover,
  heading,
  author,
  genre,
  progress,
  id,
  onDelete,
}) => {
  const router = useRouter()

  const handleReadClick = () => {
    router.push(`/books/${id}`)
  }
  const handleDelete = () => {
    if (!onDelete) return

    onDelete(id)
  }

  return (
    <div className={s.item}>
      <Image
        className={s.cover}
        src={cover}
        width={133}
        height={215}
        alt='Cover'
      />
      <div className={s.content}>
        <div className={s.headingContainer}>
          <h3 className={s.heading}>{heading}</h3>
          <p className={cn(s.author, s.text_medium)}>By {author}</p>
        </div>
        <div className={s.genreAndProgress}>
          <p className={cn(s.genre, s.text_medium)}>Жанр: {genre}</p>
          <p className={cn(s.progress, s.text_medium)}>
            Прогресс: <span>{progress}%</span>
          </p>
        </div>
        <div className={s.actions}>
          <Button onClick={handleReadClick} variant='primary' className={s.read}>
            Читать
          </Button>
          {onDelete ? (
            <button className={s.deleteBtn} onClick={handleDelete}>
              <Icon name='trash' />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default BookItem
