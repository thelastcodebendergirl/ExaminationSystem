import React, { useState } from 'react';
import { Table, Button, Select } from 'antd';
const Students = () => {
  const data = [];
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
      dataIndex: 'studentNum',
    },
  ];
  const handleChange = () => {};
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Select
          style={{ width: '50%' }}
          placeholder='select one course'
          onChange={handleChange}
          optionLabelProp='label'
          data={[]}
        ></Select>
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};
export default Students;
