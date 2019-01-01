import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends React.Component {
  static propTypes = {
    initPath: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired,
  }

  getChildContext() {
      return {
          initPath: this.props.initPath
      }
  }

  render() {
    const { history, routes, routerKey, store } = this.props

    return (
      <Provider store={store}>
        <Router history={history} children={routes} key={routerKey} />
      </Provider>
    )
  }
}

AppContainer.childContextTypes = {
    initPath: PropTypes.string.isRequired
}

export default AppContainer
