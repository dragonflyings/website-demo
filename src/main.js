/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
// 设置 browserHistory 需要配合nginx使用，地址栏里面不含#
/// import createHashHistory from 'history/lib/createHashHistory'
import { browserHistory } from 'react-router'
import syncHistoryWithStore from 'react-router-redux/lib/sync'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'

// ========================================================
// Browser History Setup
// ========================================================
/*const browserHistory = browserHistory(createHashHistory)({
  basename: __BASENAME__,
})*/

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
})

// 获取初始路由地址，初次打开、页面刷新时用
let initPath
history.listen((historyLocation) => {
    initPath = historyLocation.pathname
})

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('container')

let render = (routerKey = null) => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer
      initPath={initPath}
      store={store}
      history={history}
      routes={routes}
      routerKey={routerKey}
    />,
    MOUNT_NODE
  )
}

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// ========================================================
// Go!
// ========================================================
render()
