import useAuthContext from './useAuthContext'

export default function useSignUp (): { signUp: (email: string, password: string) => void } {
  const { authDispatch } = useAuthContext()

  function signUp (email: string, password: string): void {
    authDispatch({ type: 'LOGIN', payload: { email, token: password } })
  }

  return {
    signUp
  }
}
