import { Form, Input, Button, Space, DatePicker, Card, Select } from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;
const { Option } = Select;
const CreateExam = () => {
	const [disable, setDisable] = useState(false);
	const { id } = useParams();
	const addQuestion = () => {};
	const onFinish = (values) => {
		console.log('Received values of form:', values);
	};
	const onOk = (value) => {
		console.log(
			'selected time:',
			value[0].format('YYYY-MM-DD HH:mm'),
			value[1].format('YYYY-MM-DD HH:mm')
		);
	};
	const onClick = () => {
		setDisable(true);
	};
	return (
		<Form
			name='name="dynamic_form_item"'
			onFinish={onFinish}
			autoComplete='off'
		>
			<Space style={{ display: 'grid', marginBottom: 8 }} align='baseline'>
				<Card>
					<Form.Item
						name={'exam-name'}
						fieldKey={'exam-name'}
						label={'Exam Name'}
						rules={[{ required: true, message: 'Missing exam name' }]}
					>
						<Input />
					</Form.Item>
				</Card>
				<Card>
					<Form.Item
						name={'date-range'}
						fieldKey={'date-range'}
						label={'Date Interval'}
						rules={[{ required: true, message: 'Missing date range' }]}
					>
						<RangePicker
							showTime={{ format: 'HH:mm' }}
							format='YYYY-MM-DD HH:mm'
							onOk={onOk}
						/>
					</Form.Item>
				</Card>
			</Space>
			<Form.List name='questions'>
				{(fields, { add, remove }) => (
					<>
						{fields.map((field) => (
							<Form.Item key={field.key}>
								<Form.Item
									{...field}
									name={[field.name, 'question']}
									fieldKey={[field.fieldKey, 'question']}
									rules={[{ required: true, message: 'Missing question' }]}
								>
									<Input title='Question' placeholder='Question' />
								</Form.Item>
								<Form.Item
									{...field}
									name={[field.name, 'optionA']}
									fieldKey={[field.fieldKey, 'optionA']}
									rules={[{ required: true, message: 'Missing question' }]}
								>
									<Input title='A' placeholder='Option A' />
								</Form.Item>
								<Form.Item
									{...field}
									name={[field.name, 'optionB']}
									fieldKey={[field.fieldKey, 'optionB']}
									rules={[{ required: true, message: 'Missing question' }]}
								>
									<Input title='B' placeholder='Option B' />
								</Form.Item>
								<Form.Item
									{...field}
									name={[field.name, 'optionC']}
									fieldKey={[field.fieldKey, 'optionC']}
									rules={[{ required: true, message: 'Missing question' }]}
								>
									<Input title='C' placeholder='Option C' />
								</Form.Item>
								<Form.Item
									{...field}
									name={[field.name, 'optionD']}
									fieldKey={[field.fieldKey, 'optionD']}
									rules={[{ required: true, message: 'Missing question' }]}
								>
									<Input title='D' placeholder='Option D' />
								</Form.Item>
								<Form.Item
									{...field}
									name={[field.name, 'rightAnswer']}
									fieldKey={[field.fieldKey, 'rightAnswer']}
									rules={[{ required: true, message: 'Missing question' }]}
								>
									<Select>
										<Option value='A'>A</Option>
										<Option value='B'>B</Option>
										<Option value='C'>C</Option>
										<Option value='D'>D</Option>
									</Select>
								</Form.Item>
							</Form.Item>
						))}
						<Form.Item>
							<Button
								type='dashed'
								onClick={() => add()}
								block
								icon={<PlusOutlined />}
							>
								Add field
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>

			<Form.Item>
				<Button
					onClick={onClick}
					disabled={disable}
					type='primary'
					htmlType='submit'
				>
					Create
				</Button>
			</Form.Item>
		</Form>
	);
};
export default CreateExam;
