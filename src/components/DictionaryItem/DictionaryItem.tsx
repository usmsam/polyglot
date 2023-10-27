import { Icon } from 'components'
import { FC, useState } from 'react'

import cn from 'classnames'

import s from './DictionaryItem.module.scss'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { DictionaryModal } from 'features/DictionaryModal/DictionaryModal'
import { dictionary_words } from 'shared/mocks/dictionary_words'

export interface DictionaryProps {
  id: number
  title: string
  words: number
  level?: string | null
}

export const DictionaryItem: FC<DictionaryProps> = ({
  title,
  words,
  level,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { width } = useWindowDimensions()

  return (
    <>
      <div className={s.dictionaryItem}>
        <div>
          {width <= 763 && (
            <div
              className={cn(s.dictionaryItemWrap, {
                [s.dictionaryItemLevel]: level,
              })}
            >
              <div>
                <p>{title}</p>
                <p className={s.dictionaryWordsMobile}>
                  Слова: <span>{words}</span>
                </p>
                {level && (
                  <p className={s.dictionaryLevelMobile}>
                    Уровень: <span>{level}</span>
                  </p>
                )}
              </div>
              <div
                className={cn({
                  [s.dictionaryIconsMobile]: !level,
                })}
              >
                {!level && (
                  <div onClick={() => setModalIsOpen(true)}>
                    <Icon
                      className={s.dictionaryIcon}
                      name='edit'
                      fill='black'
                    />
                  </div>
                )}
                <Icon className={s.dictionaryIcon} name='trash' fill='black' />
              </div>
            </div>
          )}
          <p className={s.dictionaryTitle}>{title}</p>
          <div>
            <p className={s.dictionaryWords}>
              Слова: <span>{words}</span>
            </p>

            <div className={s.dictionaryWrapLevel}>
              {level && (
                <p className={s.dictionaryLevel}>
                  Уровень: <span>{level}</span>
                </p>
              )}
              {level ? (
                <div className={s.dictionaryIcons}>
                  <Icon
                    className={cn(s.dictionaryIcon, s.dictionaryTrash)}
                    name='trash'
                    fill='black'
                  />
                </div>
              ) : (
                <div className={s.dictionaryIcons}>
                  <div onClick={() => setModalIsOpen(true)}>
                    <Icon
                      className={cn(s.dictionaryIcon, s.dictionaryEdit)}
                      name='edit'
                      fill='black'
                    />
                  </div>
                  <Icon
                    className={cn(s.dictionaryIcon, s.dictionaryTrash)}
                    name='trash'
                    fill='black'
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <DictionaryModal
          wordsData={dictionary_words}
          title='Intermediate+'
          difficulty='средняя'
          onClose={() => {
            setModalIsOpen(false)
          }}
          isOpen={modalIsOpen}
        />
      )}
    </>
  )
}
