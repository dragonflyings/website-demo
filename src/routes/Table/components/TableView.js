import React from 'react'
import { Table } from 'antd';
import 'antd/lib/table/style/css'

const columns = [{
    title: '姓名',
    dataIndex: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
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

export const TableView = (props) => (
    <div>
        <Table columns={columns} dataSource={data} pagination={false} />
    </div>
)

export default TableView
