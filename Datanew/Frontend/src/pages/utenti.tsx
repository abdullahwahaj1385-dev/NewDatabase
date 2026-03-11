import { Table, Tag, Space } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { Button } from 'antd';
import { GrAdd } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Utente } from '../lib/types/type';

const { Column, ColumnGroup } = Table;


export default function UtentiPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<Utente[]>([]);

  useEffect(() => {
  const fetchData = async () => {
    const users = await getUsers();
    console.log(users);

    const utenti = users.map((user: Utente) => ({
      firstName: user.Nome,
      lastName: user.Cognome,
      sesso: user.sesso,  
      dataNascita: user.dataNascita,
      email: user.email,
      address: user.Address,
      telefono: user.telefono,
    }));
     
    setUsers(utenti);
  };
  fetchData();
}, []);

//funzione di fetch da backend per ottenere gli utenti e visualizzarli in una tabella con possibilità di modifica e cancellazione
const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/utente');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return [];
  }
  }


  return (
    <div className="utenti">
      <h1>Utenti</h1>
      

      <div className='flex gap-2 justify-end mr-2 mb-2'>
       <Button className='bg-blu-500' onClick={() => navigate('/test')}> <GrAdd/> </Button>
      
      </div>

      <Table<Utente> dataSource={users} rowKey="id">
        <ColumnGroup title="" >
          <Column title="Nome" dataIndex="firstName" key="firstName" />
          <Column title="Cognome" dataIndex="lastName" key="lastName" />
          <Column title="Sesso" dataIndex="sesso" key="sesso" />
        <Column title="Data-nascita" dataIndex="dataNascita" key="dataNascita" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Address" dataIndex="address" key="address" />
        </ColumnGroup>
        
        
        <Column
          title="Funzioni"
          key="funzioni"
          render={(_: any, _record: Utente) => (
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
