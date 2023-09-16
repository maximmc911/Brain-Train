import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


 const Table = () => {
  const [useInfo, setUseInfo] = useState([]);
  const columns = [
    { field: 'id', headerName: '№', width: 50 },
    { field: 'lessons', headerName: 'Название курсов', width: 330 },
    { field: 'price', headerName: 'Цена, в руб.', type: 'number', width: 150 },
    { field: 'quantity', headerName: 'Количество покупок', type: 'number',  width: 150,},
    { field: 'revenue', headerName: 'Выручка, в руб', type: 'number',  width: 150,},
    
  ];
  
  const rows = [
      /* { id: 1, lessons: 'Snow', price: 10 , quantity: 35 }, */
 /*    { id: 2, lessons: 'Lannister', price: 15, quantity: 42 },
    { id: 3, lessons: 'Lannister', price: 155, quantity: 45 },
    { id: 4, lessons: 'Stark', price: 175, quantity: 16 },
    { id: 5, lessons: 'Targaryen', price: 187, quantity: null },
    { id: 6, lessons: 'Melisandre', price: null, quantity: 150 },
    { id: 7, lessons: 'Clifford', price: 98, quantity: 44 },
    { id: 8, lessons: 'Frances', price: 56 , quantity: 36 },
    { id: 9, lessons: 'Roxie', price:78, quantity: 65 }, */
  ];
  useEffect(() => {HandlePay() }, [])
  
  let user = JSON.parse(localStorage.getItem("user"));
  const URL_Lessons = `http://localhost:5000/profile/${user.id}`;
  console.log(URL_Lessons);
   const HandlePay = async () =>{
    try {
      const {data} = await axios.get(URL_Lessons);
      setUseInfo(data.UserMakeLessons)
    const dataUser = data.UserMakeLessons;
      console.log(dataUser);
      console.log(dataUser.length);
      
    

     

  } catch (error) {
    console.error(`пиздец`);
  }
   }
   console.log(useInfo.length);
   console.log(useInfo);
  for (let index = 0; index < useInfo.length; index++) {
    let arr= {
      id: (index + 1), 
      lessons: useInfo[index].nameLessons, 
      price: useInfo[index].priceLessons, 
      quantity: useInfo[index].quantity,
      revenue:( Number(useInfo[index].priceLessons) *  useInfo[index].quantity)

    }
    console.log(`работает`);
    rows.push(arr)
    
  }

  return (
    <>{ useInfo.length ? 

     <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
            
          },
          
        }}

        pageSizeOptions={[5, 10, 15, 20, 25]}
 
      />
    </div> : <h1 style={{textAlign:`center`}}>Сервер временно недоступен, зайдите позже</h1>
    }
    </>
  )
}

export default Table