import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Select, message } from 'antd';
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
		updateCourse(values.courseName);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const updateCourse = (courseName) => {
		fetch('http://localhost:8888/api/course/updateCourse', {
			// api port değişecek
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				courseId: id,
				coursename: courseName,
				teacherusername: localStorage.getItem('username'),
			}),
		}).then((response) => {
			if (response.ok) {
				success();
			}
		});
	};
	const success = () => {
		message.success('This is a success message');
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
			<Form.Item {...tailLayout}>
				<Button type='primary' htmlType='submit'>
					Edit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default EditCourse;
