import React from 'react'
import renderer from 'react-test-renderer'
import App from '../src/components'

// test('root div is presented', () => {
//   expect(document.getElementById('root')).not.toBeNull()
// })

test('app renders correctly', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot()
})
