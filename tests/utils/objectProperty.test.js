import { getObjectProperty } from '../../src/utils/objectProperty'

test('empty call', () => {
  let defaultErrorValue = -1
  expect(getObjectProperty()).toBe(defaultErrorValue)
})

test('null call', () => {
  let defaultErrorValue = -1
  expect(getObjectProperty(null, 'some/strange/path')).toBe(defaultErrorValue)
})

test('another error value call', () => {
  let newErrorValue = null
  expect(getObjectProperty(null, 'some/strange/path', newErrorValue)).toBe(newErrorValue)
})

test('right call for primitive type', () => {
  let a = { 0: { 1: { 2: 'a', b: '3' }, c: [4, 5] }, d: null }
  expect(getObjectProperty(a, '0.1.2')).toBe('a')
})

test('right call for object type', () => {
  let a = { 0: { 1: { 2: 'a', b: '3' }, c: [4, 5] }, d: null }
  expect(getObjectProperty(a, '0.c')).toBe(a[0].c)
})

test('empty value start', () => {
  let defaultErrorValue = -1
  let a = { 0: { 1: { 2: 'a', b: '3' }, c: [4, 5] }, d: null }
  expect(getObjectProperty(a, '.0.c')).toBe(defaultErrorValue)
})

test('empty value middle', () => {
  let defaultErrorValue = -1
  let a = { 0: { 1: { 2: 'a', b: '3' }, c: [4, 5] }, d: null }
  expect(getObjectProperty(a, '0..c')).toBe(defaultErrorValue)
})

test('empty value end', () => {
  let defaultErrorValue = -1
  let a = { 0: { 1: { 2: 'a', b: '3' }, c: [4, 5] }, d: null }
  expect(getObjectProperty(a, '0.c.')).toBe(defaultErrorValue)
})

test('bad last value', () => {
  let defaultErrorValue = -1
  let a = { 0: { 1: { 2: 'a', b: '3' }, c: [4, 5] }, d: null }
  expect(getObjectProperty(a, '0.c.xxx')).toBe(defaultErrorValue)
})
