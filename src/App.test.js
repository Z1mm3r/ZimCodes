import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App.js' 
import { MemoryRouter } from  'react-router-dom'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000"
  }),
  useRouteMatch: () => ({ url: '/'}),
}));


test('renders without crashing', () => {
  const {asFragment} = render(<App />, {wrapper: MemoryRouter})
  expect(asFragment()).toMatchSnapshot();
})