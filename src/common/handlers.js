import { notify } from '../components'

function logOut () {
  localStorage.clear()
  location.reload()
  notify('Unauthhorised', 'ERROR')
}

export function httpErrorHandler (error = null) {
  if (error.response && error.response.data) {
    error.response.data.errors.forEach(function (subError) {
      if (subError.message === 'Unauthorised') {
        logOut()
      } else {
        notify(subError.message, 'ERROR')
      }
    })
  }
}

export function getAuthHeaders (token = '') {
  return { headers: { Authorization: token } }
}

export function changeHandler(setter, validator, errorSetter, event) {
  if (validator) errorSetter(!validator(event.target.value))
  setter(event.target.value)
}