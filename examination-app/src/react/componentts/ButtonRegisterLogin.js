import React from 'react';
import { Button } from 'antd';

const ButtonField = ({ fieldName, onClickEvent }) => {
  return (
    <Button type='primary' htmlType='submit' onClick={onClickEvent}>
      {fieldName}
    </Button>
  );
};
export default ButtonField;
