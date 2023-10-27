import { Footer } from 'features/Footer/Footer'
import { HeaderLanding } from 'features/Headers/HeaderLanding'
import { HeaderLibrary } from 'features/Headers/HeaderLibrary'
import { Sidebar } from 'features/Sidebar/Sidebar'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect, useState } from 'react'
import { mock_sidebar } from 'shared/mocks/mock_sidebar'

import s from './layout.module.scss'
import { noLayout } from './utils'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter()
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className={s.layout}>
      {pathname === '/' ? (
        <>
          <HeaderLanding />
          <main>{children}</main>
        </>
      ) : !noLayout.includes(pathname) && !pathname.includes('/books') ? (
        <>
          <HeaderLibrary userName='Виталий Гогунский' />
          <main className={s.main}>
            <Sidebar
              active={activeTab}
              onClick={setActiveTab}
              items={mock_sidebar}
            />
            {children}
          </main>
        </>
      ) : (
        <>{children}</>
      )}
      {(pathname !== '/example' || !pathname.includes('/books')) && <Footer />}
    </div>
  )
}
