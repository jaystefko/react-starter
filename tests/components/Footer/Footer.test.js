import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../../src/components/Footer'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<Footer />)
  const linkElement = screen.getByText(/Footer/)
  expect(linkElement).toBeInTheDocument()
})
