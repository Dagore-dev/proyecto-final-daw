import useAuthContext from './useAuthContext'

export default function useLogin (): { login: (email: string, password: string) => void } {
  const { authDispatch } = useAuthContext()

  function login (email: string, password: string): void {
    authDispatch({ type: 'LOGIN', payload: { email, token: password } })
  }

  return {
    login
  }
}
