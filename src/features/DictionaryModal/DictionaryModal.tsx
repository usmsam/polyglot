import React, { FC } from 'react'
import { ModalWrapper } from 'components/Modal/ModalWrapper'

import s from './dictionaryModal.module.scss'
import { DictionaryModalItem } from './DictionaryModalItem/DictionaryModalItem'

interface DictionaryModalItemProps {
  id: number
  word: string
  translate: string
}

interface DictionaryModalProps {
  wordsData: DictionaryModalItemProps[]
  title: string
  difficulty: string
  onClose: () => void
  isOpen: boolean
}

export const DictionaryModal: FC<DictionaryModalProps> = ({
  wordsData,
  title,
  difficulty,
  onClose,
  isOpen,
}) => {
  return (
    <ModalWrapper onClose={onClose} isOpen={isOpen}>
      <div className={s.modal}>
        <button className={s.closeButton} onClick={onClose}>
          +
        </button>
        <div className={s.header}>
          <p className={s.title}>{title}</p>
          <div className={s.statistic}>
            <span className={s.statisticItem}>Слов: {wordsData?.length}</span>
            <span className={s.statisticItem}>Сложность: {difficulty}</span>
          </div>
        </div>
        <div className={s.content}>
          {wordsData?.map(item => (
            <div key={item.id} className={s.wordsWrapper}>
              <DictionaryModalItem word={item.word} />-
              <DictionaryModalItem word={item.translate} />
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  )
}
