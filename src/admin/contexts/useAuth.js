import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
  useReducer,
} from 'react'
import axios from 'axios'
import AuthReducer from './AuthReducer'
import { INITIAL_STATE } from './AuthContext'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  axios.defaults.withCredentials = true

  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  const [username, setUsername] = useState(null)
  const [role, setRole] = useState(null)
  const [facebook, setFacebook] = useState(null)
  const [medium, setMedium] = useState(null)
  const [twitter, setTwitter] = useState(null)

  // check if user is logged in and keep user logged in

  useEffect(() => {
    async function getUser() {
      try {
        await axios.get(`${process.env.REACT_APP_DB}/me`).then((result) => {
          if (result) {
            setFacebook(result.data.data.facebook)
            setMedium(result.data.data.medium)
            setTwitter(result.data.data.twitter)
            setUsername(result.data.data.username)
            setRole(result.data.data.role)
          } else {
            return false
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [state.currentUser])

  // memoize the values
  const memoizedValue = useMemo(
    () => ({
      username,
      role,
      facebook,
      medium,
      twitter,
    }),
    [username],
  )

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}
