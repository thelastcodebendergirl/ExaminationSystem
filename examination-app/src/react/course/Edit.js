import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';
import {
  HighlightOutlined,
  SmileOutlined,
  SmileFilled,
} from '@ant-design/icons';

const { Paragraph } = Typography;
const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 15 },
};
const tailLayout = {
  wrapperCol: { offset: 3, span: 16 },
};
const courses = [
  {
    key: 1,
    kurs: 'cloud computing',
  },
  {
    key: 2,
    kurs: 'bulut bilişim',
  },
];
const EditCourse = () => {
  const { id } = useParams();

  const kurs = courses.find((e) => e.key === parseInt(id));

  const kursName = kurs.kurs;
  const [editableStr, setEditableStr] = useState(kursName);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Course Name'
        name='courseName'
        rules={[{ required: true, message: 'Please input your course name!' }]}
      >
        <Paragraph editable={{ onChange: setEditableStr }}>
          {editableStr}
        </Paragraph>
      </Form.Item>

      <Form.Item label='Students' name='students'>
        <Select
          mode='multiple'
          allowClear
          style={{ width: '100%' }}
          placeholder='Please select'
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Edit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default EditCourse;
