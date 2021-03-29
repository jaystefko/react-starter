import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../../src/components/Header'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<Header />)
  const linkElement = screen.getByText(/Header/)
  expect(linkElement).toBeInTheDocument()
})
