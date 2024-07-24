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
  export async function LogoutAdmin() {
    const response = await axios.post(`${API_URL}/logout`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
  
    });
    return response;
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

export async function getTotalToken() {
  const response = await axios.get(`${API_URL}/get_total_token_used_everyday`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  })
  return response.data
}

export async function getTotalResourceUsed() {
  const response = await axios.get(`${API_URL}/get_total_resource_used_everyday`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  })
  return response.data
}

export async function getNewUserIn7Days() {
  const response = await axios.get(`${API_URL}/get_total_new_user_in_7_days`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  })
  return response.data
}

export async function getTotalResourceUsedByUser() {
  const response = await axios.get(`${API_URL}/get_total_resource_used_by_user`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  })
  return response.data
}

export async function getTotalLoginByDay() {
  const response = await axios.get(`${API_URL}/get_total_login_by_day`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  })
  return response.data
}
export async function getTotalTimeUsedEveryday() {
  const response = await axios.get(`${API_URL}/get_total_time_used_everyday`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  })
  return response.data
}
export async function getTotalUserEveryday() {
  const response = await axios.get(`${API_URL}/get_total_user_everyday`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  })
  return response.data
}
