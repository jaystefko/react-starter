import React from 'react'
import { render, screen } from '@testing-library/react'
import SignUp from '../../../src/components/SignUp'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<SignUp />)
  const linkElement = screen.getByText(/SignUp/)
  expect(linkElement).toBeInTheDocument()
})
