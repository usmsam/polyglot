import { Heroblock } from 'features'
import { InfoBlock } from 'features/InfoBlock/InfoBlock'
import { FC } from 'react'

export const HomePage: FC = () => {
  return (
    <>
      <Heroblock />
      <InfoBlock />
    </>
  )
}
