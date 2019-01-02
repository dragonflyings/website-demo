import React from 'react'
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
import 'antd/lib/form/style/css'
import _ from 'lodash'
// const _ = require("lodash")

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class DetailView extends React.Component {
    render() {
        const params = location.href.indexOf('?') > 0 ? _.chain(location.href.substring(location.href.indexOf('?') + 1)).split('&').map(i=>i.split('=')).fromPairs().value() : {}
        const { getFieldProps } = this.props.form
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        }
        return (
            <Form horizontal>
                <FormItem {...formItemLayout} label="用户名">
                    <p className="ant-form-text" id="userName" name="userName">{(params.name ? decodeURIComponent(params.name) : '无名') + (params.age || 20) + '岁'}</p>
                </FormItem>
                <FormItem {...formItemLayout} label="密码">
                    <Input type="password" {...getFieldProps('pass', { initialValue: '' })} placeholder="请输入密码" />
                </FormItem>
                <FormItem {...formItemLayout} label="您的性别">
                    <RadioGroup {...getFieldProps('gender', { initialValue: 'female' })}>
                        <Radio value="male">男的</Radio>
                        <Radio value="female">女的</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem {...formItemLayout} label="备注" help="随便写点什么">
                    <Input type="textarea" placeholder="随便写" {...getFieldProps('remark', { initialValue: '' })} />
                </FormItem>
                <FormItem {...formItemLayout} label={<span>卖身华府 <Tooltip title="我为秋香"><Icon type="question-circle-o" /></Tooltip></span>}>
                    <Checkbox {...getFieldProps('agreement', { initialValue: false, valuePropName: 'checked' })}>同意</Checkbox>
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        )
    }
}

DetailView = Form.create()(DetailView);

export default DetailView