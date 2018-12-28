import React from "react"
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <Link to="/users">Users</Link>
                        <Link to="/user/:userId">ddsfsf</Link>
                    </li>
                    <li><Link to="*">xxx</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})