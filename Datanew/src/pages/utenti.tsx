import { Table, Tag, Space } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { Button } from 'antd';
import { GrAdd } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  sesso: string;
  dataNascita: number;
  email: string;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'Abdullah',
    lastName: 'Wahaj',
    sesso: 'M',
    dataNascita: 69,
    email: 'abdu@123.gmail.com',
    address: 'vial alla stazione 12, roma',
    tags: [''],
  },
  ];
  const data2: DataType[] = [
  {
    key: '2',
    firstName: 'Alex',
    lastName: 'Napolitano',
    sesso: 'M',
    dataNascita: 77,
    email: '',
    address: '',
    tags: [''],
  },
];

export default function Utenti() {
  const navigate = useNavigate();

  return (
    <div className="utenti">
      <h1>Utenti</h1>
      

      <div className='flex gap-2 justify-end mr-2 mb-2'>
       <Button className='bg-blu-500' onClick={() => navigate('/test')}> <GrAdd/> </Button>
      
      </div>

      <Table<DataType> dataSource={data.concat(data2)}>
        <ColumnGroup title="" >
          <Column title="Nome" dataIndex="firstName" key="firstName" />
          <Column title="Cognome" dataIndex="lastName" key="lastName" />
          <Column title="Sesso" dataIndex="sesso" key="sesso" />
        <Column title="Data-nascita" dataIndex="dataNascita" key="dataNascita" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Address" dataIndex="address" key="address" />
        </ColumnGroup>
        
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags: string[]) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        />
        <Column
          title="Funzioni"
          key="funzioni"
          render={(_: any, _record: DataType) => (
            <Space size="middle">
              <button> <FaEdit style={{ color: 'green', fontSize: '20px' }} onClick={() => navigate('/pagin1')}/></button>
           
            <FaDeleteLeft style={{ color: 'red', fontSize: '20px' }} />
            
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

