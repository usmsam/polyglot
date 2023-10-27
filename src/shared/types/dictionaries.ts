export type Dictionaries = {
  data: {
    id: number,
    createdAt: string,
    deletedAt: string,
    title: string,
    difficulty: number,
    translations: {
      id: number,
      createdAt: string,
      deletedAt: string,
      dictionary: string,
      dictionaryId: number,
      ru: string,
      en: string
    },
    type: string
  }
}
