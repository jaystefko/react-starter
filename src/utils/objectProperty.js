export function getObjectProperty(object = null, path = '', errorValue = -1) {
  if (object === null || typeof object !== 'object') return errorValue
  let nestleList = path.split('.')
  let obj = object
  for (let index in nestleList) {
    if (typeof obj === 'undefined' || nestleList[index] === '') return errorValue
    obj = obj[nestleList[index]]
  }
  return typeof obj === 'undefined' ? errorValue : obj
}
