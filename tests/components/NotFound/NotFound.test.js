import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from '../../../src/components/NotFound'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<NotFound />)
  const linkElement = screen.getByText(/NotFound/)
  expect(linkElement).toBeInTheDocument()
})
