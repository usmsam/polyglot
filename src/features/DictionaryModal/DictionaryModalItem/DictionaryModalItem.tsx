import { Icon, Input } from 'components'
import React, { FC, useRef, useState } from 'react'
import { useClickOutside } from 'shared/hooks/useClickOutside'

import s from './dictionaryModalItem.module.scss'

interface DictionaryModalItemProps {
  word: string
}

export const DictionaryModalItem: FC<DictionaryModalItemProps> = ({ word }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [inputValue, setInputValue] = useState(word)
  const inputRef = useRef(null)

  const onCloseInput = () => {
    setIsEditable(false)
  }

  useClickOutside(inputRef, onCloseInput)

  return (
    <div className={s.wrapper}>
      {isEditable ? (
        <Input
          className={s.input}
          value={inputValue}
          onChange={setInputValue}
          ref={inputRef}
          autofocus
        />
      ) : (
        <div className={s.wordItem}>
          <span className={s.word}>{inputValue}</span>
          <button className={s.deleteBtn} onClick={() => setIsEditable(true)}>
            <Icon name='edit' />
          </button>
        </div>
      )}
    </div>
  )
}
