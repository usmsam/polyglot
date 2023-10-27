import { FileData } from 'shared/types/files';
import { endpoints_files } from './../endpoints';
import { api } from './../index';

export const getFiles = () => api.get(endpoints_files.files)
export const postFiles = (data: FileData) => api.post(endpoints_files.files, data)