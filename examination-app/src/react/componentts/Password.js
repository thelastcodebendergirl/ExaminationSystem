import React from 'react';
import { Input } from 'antd';

const PasswordField = () => {
  return (
    <Input.Password
      style={{ marginLeft: '5%' }}
      type='password'
      placeholder='Please enter your password'
    />
  );
};
export default PasswordField;
