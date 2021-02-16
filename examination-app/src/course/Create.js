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
		success();
		setDisableButton(!disableButton);
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
				<Input />
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
