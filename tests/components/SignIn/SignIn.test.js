import React from 'react'
import { render, screen } from '@testing-library/react'
import SignIn from '../../../src/components/SignIn'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<SignIn />)
  const linkElement = screen.getByText(/SignIn/)
  expect(linkElement).toBeInTheDocument()
})
