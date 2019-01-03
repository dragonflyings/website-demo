import React from 'react'
import { Link } from 'react-router'
import { Table } from 'antd';
import 'antd/lib/table/style/css'
import PropTypes from "prop-types";
import Header from "components/Header/Header";

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    render: text => <a href={'/detail?name=' + encodeURIComponent(text)} target="_blank">{text}</a>
}, {
    title: '年龄',
    dataIndex: 'age',
    render: text => <Link to={'/detail?age=' + text}>{text}</Link>
}, {
    title: '住址',
    dataIndex: 'address',
}];

const data = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
}, {
    key: '3',
    name: '李大嘴',
    age: 32,
    address: '西湖区湖底公园1号',
}];

export const TableView = (props, context) => {
    const { history } = context

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    )
}
Header.contextTypes = {
    history:PropTypes.object.isRequired
}

export default TableView
