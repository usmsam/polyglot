import { Dictionaries } from 'shared/types/dictionaries';
import { endpoints_dictionaries } from './../endpoints';
import { api } from './../index';

export const getDictionaries = () => api.get(endpoints_dictionaries.dictionaries)
export const getDictionariesId = (id: number) => api.get(endpoints_dictionaries.dictionaries_id(id))
export const getDictionariesIdCopy = (id: number) => api.post(endpoints_dictionaries.dictionaries_copy(id), id)
export const patchDictionariesId = (id: number) => api.patch(endpoints_dictionaries.dictionaries_id(id))
export const deleteDictionariesId = (id: number) => api.patch(endpoints_dictionaries.dictionaries_id(id))

export const getAdminDictionaries = () => api.get(endpoints_dictionaries.admin.dictionaries)
export const getAdminDictionariesId = (id: number) => api.get(endpoints_dictionaries.admin.dictionaries_id(id))
export const getAdminDictionariesIdCopy = (id: number, data: Dictionaries) => api.post(endpoints_dictionaries.admin.dictionaries_id(id), data)
export const patchAdminDictionariesId = (id: number) => api.patch(endpoints_dictionaries.admin.dictionaries_id(id))
export const deleteAdminDictionariesId = (id: number) => api.delete(endpoints_dictionaries.admin.dictionaries_id(id))