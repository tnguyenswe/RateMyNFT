import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Reviews from './pages/reviews';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/reviews/:id" element={<Reviews/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
