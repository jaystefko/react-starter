import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../../src/components/Home'
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Home/)
  expect(linkElement).toBeInTheDocument()
})
