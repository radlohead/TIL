import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

reportWebVitals()
