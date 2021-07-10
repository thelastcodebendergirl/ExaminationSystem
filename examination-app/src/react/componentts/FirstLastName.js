import React, { forwardRef } from 'react';
import { Input } from 'antd';

const FirstLastName = () => {
  return <Input />;
};
export default forwardRef((props, ref) => (
  <FirstLastName {...props} getRef={ref} />
));
