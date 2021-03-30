export function notify(message = '', type = 'log', context = console) {
  let MAX_MESSAGE_LENGTH = 200
  if (!(typeof message === 'string' && message.length > 0 && message.length < MAX_MESSAGE_LENGTH)) return false
  if (!(type === 'log' || type === 'warn' || type === 'error') || !context) return false
  context[type](message)
  return true
}

export function getAuthHeaders(token = '') {
  let MAX_TOKEN_LENGTH = 200
  if (!(typeof token === 'string' && token.length > 0 && token.length < MAX_TOKEN_LENGTH)) return null
  return { headers: { Authorization: token } }
}
