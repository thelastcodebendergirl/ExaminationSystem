import { Form, Input, Button, Select, message } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const success = () => {
	message.success('This is a success message');
};
const layout = {
	labelCol: { span: 3 },
	wrapperCol: { span: 15 },
};
const tailLayout = {
	wrapperCol: { offset: 3, span: 16 },
};

const CreateCourse = () => {
	const [disableButton, setDisableButton] = useState(false);
	const { id } = useParams();
	const onFinish = (values) => {
		createCourse(values.courseName);

		setDisableButton(!disableButton);

		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const createCourse = (courseName) => {
		fetch('http://localhost:8281/api/course/createCourse', {
			// api port değişecek
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.getItem('token'),
				'Access-Control-Allow-Origin': '*',
            	'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            	'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,authorization,content-type',
			},
			body: JSON.stringify({
				coursename: courseName,
				teacherusername: localStorage.getItem('username'),
			}),
		}).then((response) => {
			if (response.ok) {
				success();
			}
		});
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
				<Input />
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button
					disabled={disableButton}
					id='create-course-button'
					type='primary'
					htmlType='submit'
				>
					Create
				</Button>
			</Form.Item>
		</Form>
	);
};
export default CreateCourse;
