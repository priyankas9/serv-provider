export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
           
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "message",
      headerName: "Message",
      width: 250,
    },
   

   
   
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
     message: "Nice",
  
      email: "1snow@gmail.com",
     
    },
    {
      id: 2,
      username: "Jamie Lannister",
      message: "Nice",
      email: "2snow@gmail.com",
   
    },
    {
      id: 3,
      username: "Lannister",
      message: "Nice",
      email: "3snow@gmail.com",
    
     
    },
    {
      id: 4,
      username: "Stark",
      message: "Nice",
      email: "4snow@gmail.com",

      
    },
    {
      id: 5,
      username: "Targaryen",
      message: "Nice",
      email: "5snow@gmail.com",
   
      
    },
    {
      id: 6,
      username: "Melisandre",
      message: "Nice",
      email: "6snow@gmail.com",
   
     
    },
    {
      id: 7,
      username: "Clifford",
      message: "Nice",
      email: "7snow@gmail.com",
      
      
    },
    {
      id: 8,
      username: "Frances",
      message: "Nice",
      email: "8snow@gmail.com",
     
     
    },
    {
      id: 9,
      username: "Roxie",
      message: "Nice",
      email: "snow@gmail.com",
      
      
    },
    {
      id: 10,
      username: "Roxie",
      message: "Nice",
      email: "snow@gmail.com",
   
    },
  ];