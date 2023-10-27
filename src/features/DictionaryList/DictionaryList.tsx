import { FC } from "react"
import { DictionaryItem, DictionaryProps } from "components/DictionaryItem/DictionaryItem"

import s from './DictionaryList.module.scss'
import { Icon } from "components"

interface DictionaryListProps {
  dictionaries: DictionaryProps[]
}

export const DictionaryList: FC<DictionaryListProps> = ({ dictionaries }) => {
  return (
    <div className={s.dictionaryList}>
      {dictionaries.map((dictionary: DictionaryProps) => (
        <DictionaryItem key={dictionary.id} {...dictionary} />
      ))}
      <div className={s.dictionaryAdd}>
        <div className={s.dictionaryPlusWrap}>
          <Icon className={s.dictionaryPlus} name='plus' fill="primary" />
        </div>
        <span className={s.dictionaryNew}>Добавить новый</span>
      </div>
    </div>
  )
}
