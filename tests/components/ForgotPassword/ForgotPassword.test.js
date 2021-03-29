import React from 'react'
import { render, screen } from '@testing-library/react'
import ForgotPassword from '../../../src/components/ForgotPassword'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<ForgotPassword />)
  const linkElement = screen.getByText(/ForgotPassword/)
  expect(linkElement).toBeInTheDocument()
})
