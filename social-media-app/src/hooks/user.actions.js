import axios from "axios"
import { useNavigate } from "react-router-dom"

function useUserActions() {
  const navigate = useNavigate()
  const baseURL = 'http://localhost:8000/api'
  return {
    login,
    // register,
    logout,
  }

  function setUserData(data) {
    localStorage.setItem('auth', JSON.stringify({
      access: data.access,
      refresh: data.refresh,
      user: data.user,
    }))
  }

  function login(data) {
    return axios.post(`${baseURL}/auth/login/`, data).then((res) => {
      console.log('login after', res.data)
      setUserData(res.data)
      navigate('/')
    })
  }

  function logout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }
  
}

export default useUserActions