import { Books } from 'shared/types/books';
import { endpoints_books } from './../endpoints';
import { api } from './../index';

export const getBooks = () => api.get(endpoints_books.books)
export const getBooksId = (id: number) => api.get(endpoints_books.books_id(id))

export const getAdminBooks = () => api.get(endpoints_books.admin.books)
export const getAdminBooksId = (id: number) => api.get(endpoints_books.admin.books_id(id))
export const patchAdminBooksId = (id: number) => api.patch(endpoints_books.admin.books_id(id))
export const deleteAdminBooksId = (id: number) => api.delete(endpoints_books.admin.books_id(id))
export const postAdminBooks = (data: Books) => api.post(endpoints_books.admin.books, data)