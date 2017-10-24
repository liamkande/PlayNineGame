import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker'


registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'))
