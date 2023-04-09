import IFormField from '../interfaces/IFormField'

export const fixedInputClass = 'rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'

export const loginFields: IFormField[] = [
  {
    labelText: 'Correo electrónico',
    labelFor: 'email-address',
    id: 'email-address',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Correo electrónico'
  },
  {
    labelText: 'Contraseña',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Contraseña'
  }
]

export const signUpFields: IFormField[] = [
  {
    labelText: 'Correo electrónico',
    labelFor: 'email-address',
    id: 'email-address',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Correo electrónico'
  },
  {
    labelText: 'Contraseña',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Contraseña'
  },
  {
    labelText: 'Repite la contraseña',
    labelFor: 'confirm-password',
    id: 'confirm-password',
    name: 'confirm-password',
    type: 'password',
    autoComplete: 'confirm-password',
    isRequired: true,
    placeholder: 'Repite la contraseña'
  }
]

export const loginFieldsKeys = getKeys(loginFields)

export const signUpFieldsKeys = getKeys(signUpFields)

function getKeys (fields: IFormField[]): { [key: string]: string } {
  return Object.fromEntries(fields.map(field => [field.id, '']))
}
