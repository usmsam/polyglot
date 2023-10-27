// for several APIs, create several objects like authEndpoints, shopEndpoints, etc.

export const endpoints_dictionaries = {
  dictionaries: '/dictionaries',
  dictionaries_id: (id: number) => `/dictionaries/${id}`,
  dictionaries_copy: (id: number) => `/dictionaries/${id}/copy`,
  admin: {
    dictionaries: '/admin/dictionaries',
    dictionaries_id: (id: number) => `/admin/dictionaries/${id}`,
    dictionaries_copy: (id: number) => `/admin/dictionaries/${id}/copy`
  }
}

export const endpoints_books = {
  books: '/books',
  books_id: (id: number) => `/books/${id}`,
  admin: {
    books: '/admin/books',
    books_id: (id: number) => `/admin/books/${id}`
  }
}

export const endpoints_categories = {
  categories: '/categories',
  categories_id: (id: number) => `/categories/${id}`,
  admin: {
    categories: '/admin/categories',
    categories_id: (id: number) => `/admin/categories/${id}`
  }
}

export const endpoints_files = {
  files: '/files',
  files_filename: (filename: string) => `/files/${filename}`,
}

export const endpoints_users = {
  users: '/admin/users',
  users_id: (id: number) => `/admin/users/${id}`
}

export const endpoints = {
  me: '/auth/me',
  login: '/auth/login',
  signup: '/auth/signup'
}
