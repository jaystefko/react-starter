import React from 'react'
import { render, screen } from '@testing-library/react'
import Component_2 from '../../../src/components/Component_2'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<Component_2 />)
  const linkElement = screen.getByText(/Component_2/)
  expect(linkElement).toBeInTheDocument()
})
