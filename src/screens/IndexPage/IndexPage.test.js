import IndexPage from './index'
import App from 'App.js'
import React from 'react'
import {screen} from '@testing-library/react'

import {renderWithRouter} from 'utils/testUtils.js'
  
  
  test('renders without crashing', () => {
    const {asFragment} = renderWithRouter(<App/>)
    expect(asFragment()).toMatchSnapshot();
  })
