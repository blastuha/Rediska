import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './redux/store'

import Loader from './components/ui/Loader'

import './styles/global.scss'

export const AppComponent = lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <AppComponent />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
