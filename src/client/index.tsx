// Polyfills
if (typeof window !== 'undefined') {
  require('matchmedia-polyfill')
  require('matchmedia-polyfill/matchMedia.addListener')
}

import ReactDOM from 'react-dom'

import App from './App'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
    // .then(_registration => {
    //   // console.log('SW registered: ', registration)
    // })
    // .catch(_registrationError => {
    //   // console.log('SW registration failed: ', registrationError)
    // })
  })
}
