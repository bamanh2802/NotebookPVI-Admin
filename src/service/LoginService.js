import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export async function loginForm(username, password) {
    try {
      const response = await axios.post(`${API_URL}/login`, new URLSearchParams({
        username: username,
        password: password
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true
      });
      return response;
    } catch (error) {
      console.error('Error fetching notebooks:', error);
      throw error; 
    }
  }

export async function getAllUsers() {
    const response = await axios.get(`${API_URL}/get_users`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });

    return response.data
}

export async function createAccount(username, password, email) {
    const response = await axios.post(`${API_URL}/create_user`, {
        username,
        password, 
        email
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
    });
    
    return response.data;
}

export async function changeInfoUser(user_id, username, password, email) {
    const response = await axios.put(`${API_URL}/change_user_info`, {
        user_id,
        username,
        password, 
        email
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
    });
    
    return response.data;
}

export async function deleteUserById(userId) {
    const response = await axios.delete(`${API_URL}/delete_user/${userId}`, 
    {
        headers: {
            'Content-Type': 'application/json',
          },
        withCredentials: true
    })
    return response
}