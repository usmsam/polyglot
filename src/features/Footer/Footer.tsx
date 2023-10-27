import { FC } from 'react'
import s from './footer.module.scss'
import { Icon } from 'components'
import Link from 'next/link'

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTop}>
          <Icon name={'logo'} className={s.logo} />
          <div className={s.footerSocial}>
            <p className={s.title}>Присоединяйся:</p>
            <div className={s.socialNetworks}>
              <Link href='#'>
                <Icon name={'telegram'} className={s.icon} />
              </Link>
              <Link href='#'>
                <Icon name={'vk'} className={s.icon} />
              </Link>
            </div>
          </div>
        </div>
        <div className={s.footerBottom}>
          <p className={s.bottomTitle}>2023 Все права защищены</p>
          <a href='#' className={s.agreement}>
            Пользовательское соглашение
          </a>
        </div>
      </div>
    </footer>
  )
}
