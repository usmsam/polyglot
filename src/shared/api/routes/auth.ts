import { endpoints } from './../endpoints';
import { api } from ".."
import { Auth, Register } from 'shared/types/auth';

export const authorize = (data: Auth) => {
    return api.post(endpoints.login, data)
}
export const register = (data: Register) => {
    return api.post(endpoints.signup, data)
}