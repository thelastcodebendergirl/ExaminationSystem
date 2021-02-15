import { Form, Input, Button, Checkbox, Select } from 'antd';
import { useParams } from 'react-router-dom';

const layout = {
	labelCol: { span: 3 },
	wrapperCol: { span: 15 },
};
const tailLayout = {
	wrapperCol: { offset: 3, span: 16 },
};

const CreateCourse = () => {
	const { id } = useParams();
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
				<Button type='primary' htmlType='submit'>
					Create
				</Button>
			</Form.Item>
		</Form>
	);
};
export default CreateCourse;
