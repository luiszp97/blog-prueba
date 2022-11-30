import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import App from './App'
import { store } from './store/store'
import { AppTheme } from './theme/AppTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store= { store }>
      <AppTheme>
        <App />
      </AppTheme>
    </Provider>
  // </React.StrictMode>
)
