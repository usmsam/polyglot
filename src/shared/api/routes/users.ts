import { User } from 'shared/types/users';
import { endpoints_users } from './../endpoints';
import { api } from './../index';

export const getUsers = () => api.get(endpoints_users.users)
export const getUsersId = (id: number) => api.get(endpoints_users.users_id(id))
export const postUsers = (data: User) => api.post(endpoints_users.users, data)
export const patchUsers = (id: number) => api.patch(endpoints_users.users_id(id))
export const deleteUsers = (id: number) => api.delete(endpoints_users.users_id(id))