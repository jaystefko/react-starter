export function notify(message = '', type = 'log', context = console) {
  let MAX_MESSAGE_LENGTH = 200
  if (!(typeof message === 'string' && message.length < MAX_MESSAGE_LENGTH)) return false
  if (!(type === 'log' || type === 'warn' || type === 'error')) return false
  context[type](message)
  return true
}

export function getAuthHeaders(token = '') {
  let MAX_TOKEN_LENGTH = 200
  if (!(typeof token === 'string' && token.length < MAX_TOKEN_LENGTH)) return null
  return { headers: { Authorization: token } }
}

export function changeHandler(setter, validator, errorSetter, event) {
  if (validator && errorSetter) errorSetter(!validator(event.target.value))
  setter(event.target.value)
}
