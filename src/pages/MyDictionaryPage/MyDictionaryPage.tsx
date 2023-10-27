import { RecommendationList } from 'components/RecomendationList/RecommendationList'
import { Tabs, TabsItem } from 'components/Tabs/Tabs'
import { DictionaryList } from 'features/DictionaryList/DictionaryList'
import { DictionaryModal } from 'features/DictionaryModal/DictionaryModal'
import { FC, useState } from 'react'
import { getDictionariesId } from 'shared/api/routes/dictionaries'
import { dictionary_list } from 'shared/mocks/dictionary_list'
import { dictionary_words } from 'shared/mocks/dictionary_words'

import s from './MyDictionary.module.scss'

const menu: TabsItem[] = [
  { value: 1, label: 'Мои' },
  { value: 2, label: 'Рекомендации' },
]
export const MyDictionaryPage: FC = () => {
  const [active, setActive] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.dictionaryWrap}>
      <h2 className={s.dictionaryTitle}>Мои словари</h2>
      <div>
        <Tabs items={menu} value={active} onClick={setActive} />
      </div>
      {active === 1 && <DictionaryList dictionaries={dictionary_list} />}
      {active === 2 && <RecommendationList />}
      <DictionaryModal
        difficulty=''
        isOpen={isOpen}
        onClose={() => setIsOpen(prev => !prev)}
        title=''
        wordsData={dictionary_words}
      />
    </div>
  )
}
