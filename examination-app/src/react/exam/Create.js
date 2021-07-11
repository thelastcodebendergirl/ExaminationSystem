import {
	Form,
	Input,
	Button,
	Space,
	DatePicker,
	Card,
	Select,
	message,
} from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;
const { Option } = Select;
const CreateExam = () => {
	const [disable, setDisable] = useState(false);
	const { id } = useParams();

	const onFinish = (values) => {
		createExam(id, values.examName, values.questions);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const createExam = (courseId, examName, questions) => {
		fetch('http://localhost:8281/api/course/createExam', {
			// api port değişecek
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.getItem('token'),
				'Access-Control-Allow-Origin': '*',
            	'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            	'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,authorization,content-type'
			},
			body: JSON.stringify({
				courseId: courseId,
				examName: examName,
				questions: questions,
			}),
		}).then((response) => {
			if (response.ok) {
				success();
			} else {
				error();
			}
		});
	};

	const success = () => {
		message.success('Exam has been created successfully.', [5]);
	};
	const error = (detail) => {
		message.error(`Exam has not been created.${detail} `, [5]);
	};
	return (
		<Form
			name='name="dynamic_form_item"'
			onFinish={onFinish}
			autoComplete='off'
			onFinishFailed={onFinishFailed}
		>
			<Space style={{ display: 'grid', marginBottom: 8 }} align='baseline'>
				<Card>
					<Form.Item
						name={'examName'}
						fieldKey={'exam-name'}
						label={'Exam Name'}
						rules={[{ required: true, message: 'Missing exam name' }]}
					>
						<Input />
					</Form.Item>
				</Card>
				<Card>
					<Form.Item
						name={'dateRange'}
						fieldKey={'date-range'}
						label={'Date Interval'}
						rules={[{ required: true, message: 'Missing date range' }]}
					>
						<RangePicker
							showTime={{ format: 'HH:mm' }}
							format='YYYY-MM-DD HH:mm'
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
									rules={[{ required: true, message: 'Missing option A ' }]}
								>
									<Input title='A' placeholder='Option A' />
								</Form.Item>
								<Form.Item
									{...field}
									name={[field.name, 'optionB']}
									fieldKey={[field.fieldKey, 'optionB']}
									rules={[{ required: true, message: 'Missing option B ' }]}
								>
									<Input title='B' placeholder='Option B' />
								</Form.Item>
								<Form.Item
									{...field}
									name={[field.name, 'optionC']}
									fieldKey={[field.fieldKey, 'optionC']}
									rules={[{ required: true, message: 'Missing option C ' }]}
								>
									<Input title='C' placeholder='Option C' />
								</Form.Item>
								<Form.Item
									{...field}
									name={[field.name, 'optionD']}
									fieldKey={[field.fieldKey, 'optionD']}
									rules={[{ required: true, message: 'Missing option D ' }]}
								>
									<Input title='D' placeholder='Option D' />
								</Form.Item>
								<Form.Item
									{...field}
									name={[field.name, 'answer']}
									fieldKey={[field.fieldKey, 'answer']}
									rules={[{ required: true, message: 'Missing right answer ' }]}
								>
									<Select placeholder={'Right Answer'}>
										<Option value='A'>A</Option>
										<Option value='B'>B</Option>
										<Option value='C'>C</Option>
										<Option value='D'>D</Option>
									</Select>
								</Form.Item>
								<MinusCircleOutlined onClick={() => remove(field.name)} />
							</Form.Item>
						))}
						<Form.Item>
							<Button
								type='dashed'
								onClick={() => add()}
								block
								icon={<PlusOutlined />}
							>
								Add question
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>

			<Form.Item>
				<Button disabled={disable} type='primary' htmlType='submit'>
					Create
				</Button>
			</Form.Item>
		</Form>
	);
};
export default CreateExam;
