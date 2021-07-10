import React from 'react';
import { Input, Select } from 'antd';

const SchoolNoField = () => {
  const selectUserType = (
    <Select defaultValue='student' className='select-after'>
      <Select.Option key={1} value='student' />
      <Select.Option key={0} value='teacher' />
    </Select>
  );
  return (
    <Input
      addonAfter={selectUserType}
      style={{ marginLeft: '12px' }}
      placeholder={'Please enter your school number'}
      maxLength={11}
    />
  );
};
export default SchoolNoField;
