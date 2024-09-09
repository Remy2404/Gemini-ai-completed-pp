import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://server-9uzn.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const uploadImage = async (file) => {
  try {
    const response = await api.get('/upload');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('publicKey', response.data.publicKey);
    formData.append('signature', response.data.signature);
    formData.append('expire', response.data.expire);
    formData.append('token', response.data.token);

    return await axios.post(response.data.uploadURL, formData);
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const createChat = (text) => api.post('/chats', { text });

export const getUserChats = () => api.get('/userchats');

export const getChat = (id) => api.get(`/chats/${id}`);

export const updateChat = (id, question, answer, img) =>
  api.put(`/chats/${id}`, { question, answer, img });

export default api;
