import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker'
import { Provider as StoreProvider } from 'react-redux'
import reducer from './redux/reducer'

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App /> 
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
