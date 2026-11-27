import { createContext, useContext, useState, useEffect } from "react"
import apiClient from "../utils/api"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
      apiClient.get("/auth/me")
        .then(res => setUser(res.data))
        .catch(() => {
          localStorage.removeItem("token")
          delete apiClient.defaults.headers.common["Authorization"]
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    const res = await apiClient.post("/auth/login", { email, password })
    localStorage.setItem("token", res.data.token)
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`
    setUser(res.data.user)
    return res.data
  }

  const register = async (name, email, password) => {
    const res = await apiClient.post("/auth/register", { name, email, password })
    localStorage.setItem("token", res.data.token)
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`
    setUser(res.data.user)
    return res.data
  }

  const logout = () => {
    localStorage.removeItem("token")
    delete apiClient.defaults.headers.common["Authorization"]
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
