import { Form, Input, Button, Space, DatePicker, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;
const CreateExam = () => {
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
	return (
		<Form name='dynamic_form_nest_item' onFinish={onFinish} autoComplete='off'>
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

			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Create
				</Button>
			</Form.Item>
		</Form>
	);
};
export default CreateExam;
