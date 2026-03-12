import { Input } from "antd";
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { Button, Flex } from 'antd';

export default function PaginaComponent() {
  return (
    
    <div className="grid  rounded-xl border border-gray-500 p-4 mt-4 mb-4 w-full h-auto"> 
         <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl text-left font-bold">Nuovo acount </h1>
            <img src="/public/vite.svg" alt="Assidu" className="w-20 h-20" />
        </div>
        <h2 className="text-left">Hai già un account?  <a href="http://" color="yellow-400">Log in</a></h2> 
        <br />  
        <br />  
    <div className=" grid grid-cols-2 gap-6 mt-4 mb-4">
      <label className="text-left text-bold">
        Nome 
        <Input placeholder="Nome" variant="outlined"  />
      </label>
       
        <label className="text-left text-bold">
        Cognome
        <Input placeholder="Cognome" />
      </label>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4 mb-8">
  <label className="flex flex-col text-left text-bold">
    Data di nascita
    <DatePicker placeholder="Data di nascita" />
  </label>

  <label className="flex flex-col text-left text-bold">
    Sesso
    <Select
      placeholder="Sesso"
      options={[
        { value: 'M', label: 'M' },
        { value: 'F', label: 'F' },
        { value: 'A', label: 'Altro' },
      ]}
    />
  </label>

     <label className="flex flex-col col-span-1 text-left text-bold">
       Indirizzo
       <Input placeholder="Indirizzo" />
      </label>
     </div>
      
      <div className='grid grid.cols-2 gap-4 mt-4 mb-4'>
        <label className="text-left">
        Email
        <Input placeholder="Email" />
        </label>
       
        <label className="text-left">
        Telefono
        <Input placeholder="Telefono" />
        </label>
       </div>

           
            <div className="flex gap-2 justify-end mt-1 gap-2 align-end ">
              <Button color="red" variant="solid">Anulla</Button>
              <Button  color="green" variant="solid">Salva</Button>
               
            </div>

    </div>
    
    
  );
}