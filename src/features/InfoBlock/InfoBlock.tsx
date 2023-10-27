import { FC } from 'react'
import { Icon } from 'components'
import Image from 'next/image'
import cn from 'classnames'
import infoImg1 from '../../../public/assets/img/infoBlock1.png'
import infoImg2 from '../../../public/assets/img/infoBlock2.png'

import s from './infoBlock.module.scss'

export const InfoBlock: FC = () => {
  return (
    <div id='info' className={s.wrapper}>
      <div className={cn(s.info, s.reverse)}>
        <div className={s.infoText}>
          <p className={s.title}>Читай книги в оригинале и постигай мир</p>
          <p className={s.description}>
            Мы подобрали десятки лучших романов в оригинальном чтении. Вместе с
            нами, ты начнешь понимать мировую культуру глубже.
          </p>
        </div>
        <div className={s.imgWrapper}>
          <Image src={infoImg1} alt='info-img' className={s.img} />
        </div>
      </div>
      <div className={s.info}>
        <div className={s.imgWrapper}>
          <Image src={infoImg2} alt='info-img' className={s.img} />
        </div>
        <div className={s.infoText}>
          <p className={s.title}>Веди личный словарь и переводи не отрываясь</p>
          <p className={s.description}>
            Мы подготовили словари разного уровня. Но ты можешь вести личный,
            сохраняя свой темп. Заменяй слова прямо в книге и выписывай
            незнакомые.
          </p>
        </div>
      </div>
      <div id='socials' className={s.social}>
        <p className={s.socialTitle}>Давай останемся на связи</p>
        <div className={s.socialIcons}>
          <Icon name={'vk'} pointer className={s.socialIcon} />
          <Icon name={'telegram'} pointer className={s.socialIcon} />
        </div>
      </div>
    </div>
  )
}
