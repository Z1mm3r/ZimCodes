import NavButton from './index'
import React from 'react'
import {screen} from '@testing-library/react'

import {renderWithRouter} from 'utils/testUtils.js'
  
  
  test('renders without crashing', () => {
    const {asFragment} = renderWithRouter(<NavButton path='/'/>)
    expect(asFragment()).toMatchSnapshot();
  })

  test('when the route does not match, is a clickable Link',() =>{
      renderWithRouter(<NavButton path="/wrong"/>)
      const linkElement = screen.getByTestId('navButtonLink')
      expect(linkElement).toBeTruthy()

  })

  test('when the route does  match, there is no clickable Link',() =>{
      renderWithRouter(<NavButton path="/"/>)
      expect(() => (screen.getByTestId('navButtonLink'))).toThrow()
})