import React from 'react'
import s from './heroblock.module.scss'
import Tag from './Tag'
import cn from 'classnames'
import { Button } from '../../components'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Heroblock = () => {
  const router = useRouter()
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.images}>
          <Image
            width={'100%'}
            height={'100%'}
            src={'/assets/img/heroblock_1.png'}
            alt={'main_img'}
            layout='responsive'
          />
          <Tag value={'Дом'} classNames={cn(s.tagWide, s.tagLeft)} />
          <Tag value={'Home'} classNames={cn(s.tagNarrow, s.tagCenter)} />
          <Tag value={'maison'} classNames={cn(s.tagWide, s.tagRight)} />
        </div>
        <div className={s.description}>
          <p className={s.p}>
            Изучай английский, читая
            <br />
            лучшие произведения
          </p>
          <Button
            className={s.btn}
            onClick={() => {
              router.push('/allbooks')
            }}
            variant={'secondary'}
          >
            Начать
          </Button>
        </div>
      </div>
    </div>
  )
}
