import React from 'react'
import { IndexLink } from 'react-router'
import classes from './Header.css'
import { Menu } from 'antd'
import 'antd/lib/menu/style/css'
import PropTypes from "prop-types"

const Header = (props, context) => {
    const { initPath } = context

    return (
        <div>
            <div className="ant-layout-top">
                <div className="ant-layout-header web-header">
                    <div className="ant-layout-wrapper">
                        <Menu theme="dark" mode="horizontal"
                              defaultSelectedKeys={[initPath]}>
                            <Menu.Item key="/">
                                <IndexLink to="/">首页</IndexLink>
                            </Menu.Item>
                            <Menu.Item key="/counter">
                                <IndexLink to="/counter">计数器</IndexLink>
                            </Menu.Item>
                            <Menu.Item key="/table">
                                <IndexLink to="/table">表格</IndexLink>
                            </Menu.Item>
                            <Menu.Item key="/detail">
                                <IndexLink to="/detail">详情页</IndexLink>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}
Header.contextTypes = {
    initPath: PropTypes.string.isRequired
}

export default Header
