import { Input } from "antd";
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { Button, Flex } from 'antd';

export default function Pagin1() {
  return (
    
    <div className="grid  rounded-xl border border-gray-300 p-4 mt-4 mb-4 w-full h-auto">      
    <div className=" grid grid-cols-2 gap-4 mt-4 mb-4">
        <Input placeholder="Nome" />
        <Input placeholder="Cognome" />
      
      </div>

      <div className="items-center grid  cols-span-1 gap-4 mt-4 mb-8">
        <DatePicker placeholder="Data di nascita" />
          <Select
          placeholder="Sesso"
          options={[
            { value: 'M', label: 'M' },
            { value: 'F', label: 'F' },
            { value: 'A', label: 'Altro' },
          ]}
        /> 
        
     </div>
      
      <div className='grid grid gap-4 mt-4 mb-4'>
        <Input placeholder="Indirizzio " />
        <Input placeholder="Telefono" />
      </div>
           
            <div className="flex justify-end mt-1 gap-2 align-end ">
              <Button>Anulla</Button>
              <Button>Salva</Button>
               
            </div>

    </div>
    
    
  );
}

