import React, { useState } from 'react';
import { Table, Button, Select, Space, Transfer } from 'antd';
import { useParams } from 'react-router';
const AddStudents = () => {
  const params = useParams();
  const [mockData, setmockData] = useState([]);
  const [targetKeys, settargetKeys] = useState([]);
  const [isDirty, setIsdirty] = useState(false);
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

  const getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  const filterOption = (inputValue, option) =>
    option.description.indexOf(inputValue) > -1;

  const handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  };
  const onSelectChange = () => {
    setIsdirty(true);
  };
  const handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };
  const handleSave = () => {
    console.log();
  };
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button type='primary' onClick={handleSave} disabled={!isDirty}>
          Save
        </Button>
      </div>
      <Transfer
        dataSource={mockData}
        showSearch
        filterOption={filterOption}
        targetKeys={targetKeys}
        onChange={handleChange}
        onSearch={handleSearch}
        render={(item) => item.title}
        onSelectChange={onSelectChange}
      />
    </>
  );
};
export default AddStudents;
