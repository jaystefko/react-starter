import React from 'react'
import { render, screen } from '@testing-library/react'
import Component_1 from '../../../src/components/Component_1'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<Component_1 />)
  const linkElement = screen.getByText(/Component_1/)
  expect(linkElement).toBeInTheDocument()
})
