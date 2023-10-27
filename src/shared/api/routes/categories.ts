import { Categories } from 'shared/types/categories';
import { endpoints_categories } from './../endpoints';
import { api } from './../index';

export const getCategories = () => api.get(endpoints_categories.categories)
export const getCategoriesId = (id: number) => api.get(endpoints_categories.categories_id(id))

export const getAdminCategories = () => api.get(endpoints_categories.admin.categories)
export const getAdminCategoriesId = (id: number) => api.get(endpoints_categories.admin.categories_id(id))
export const postAdminCategories = (data: Categories) => api.post(endpoints_categories.admin.categories, data)
export const patchAdminCategories = (id: number) => api.get(endpoints_categories.admin.categories_id(id))
export const deleteAdminCategoriesId = (id: number) => api.get(endpoints_categories.admin.categories_id(id))