import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hello from '../src/Hello.jsx'

describe('Hello', () => {
  it('renders a level-1 heading that says "Hello, React!"', () => {
    render(<Hello />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello, React!')
  })

  it('greets you by name in a paragraph', () => {
    render(<Hello />)
    // Matches "My name is <anything>", so it passes once you fill in your name
    // with curly braces. It checks the {name} interpolation works.
    expect(screen.getByText(/My name is .+/)).toBeInTheDocument()
  })
})
