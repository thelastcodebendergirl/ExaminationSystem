import React, { useState } from 'react';
import { Table, Button, Select } from 'antd';
const Students = () => {
	const data = [
		{
			key: 1,
			name: 'meto',
			surname: 'candar',
			studentNumber: 481,
		},
		{
			key: 2,
			name: 'musti',
			surname: 'bayar',
			studentNumber: 314,
		},
		{
			key: 3,
			name: 'htc',
			surname: 'drmz',
			studentNumber: 418,
		},
		{
			key: 4,
			name: 'hsn',
			surname: 'bstn',
			studentNumber: 148,
		},
	];
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Surname',
			dataIndex: 'surname',
		},
		{
			title: 'Student Number',
			dataIndex: 'studentNumber',
		},
	];
	const handleChange = (value) => {
		//table data change...
		console.log(value);
	};
	return (
		<>
			<div style={{ marginBottom: 8 }}>
				<Select
					style={{ width: '50%' }}
					placeholder='select one course'
					onChange={handleChange}
					optionLabelProp='label'
					data={[
						{ key: 1, value: 'microservices' },
						{ key: 2, value: 'database' },
					]}
				></Select>
			</div>
			<Table dataSource={data} columns={columns} />
		</>
	);
};
export default Students;
