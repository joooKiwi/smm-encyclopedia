import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeApp from './HomeApp'

test('renders learn react link', () => {
  render(<HomeApp />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
