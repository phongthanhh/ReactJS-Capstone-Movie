import React from 'react'
import ReactDOM from 'react-dom/client'

// Setup Redux
import { Provider } from 'react-redux'
import { store } from './redux/configStore'

import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
// Antd
import 'antd/dist/reset.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
