import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHistory } from "history"

import App from './App'
import Index from './Index'
import About from './About'
import Users from './Users'
import User from './User'
import NoMatch from './NoMatch'

// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
/// const history = useRouterHistory(createHistory)({ queryKey: false });
ReactDOM.render((
    <Router history={createHistory}>
        <Route path="/" component={App}>
            {/* 当 url 为/时渲染 Index */}
            <IndexRoute component={Index} />
            <Route path="about" component={About}/>
            <Route path="users" component={Users}>
                <Route path="/user/:id" component={User}/>
            </Route>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('root'))

