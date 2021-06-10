import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//TODO WE REMOVED STRICT MODE TO MAKE OUR DYNAMIC LIGHT/DARK WORK
// SEE: https://stackoverflow.com/questions/62935784/material-ui-unchanged-colors-when-switching-back-and-forth-between-themes
// AND https://github.com/mui-org/material-ui/issues/20708
//ReactDOM.render(<App />, document.getElementById('root'));



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
