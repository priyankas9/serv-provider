export const driverInputs = [
    {
      id: "name",
      label: "Name",
      type: "text",
      errorMessage:
        "Name shouldn't include any special character!",
        pattern: "^[a-zA-Z]+ [a-zA-Z]+$",
    },
    
    {
      id: "email",
      label: "Email",
      type: "email",
      errorMessage: "It should be a valid email address!",
    },
    {
      id: "phone",
      label: "Phone",
      type: "text",
      errorMessage:
      "Phone  shouldn't include any special character!",
      pattern: "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
  
    },
    {
      id:"age",
      label: "Age",
      type: "text",
      errorMessage:
      "Age shouldn't include any special character!",
      pattern: "^(?:1[01][0-9]|20|1[8-9]|[2-5][0-5])$",
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      errorMessage:
      "Address shouldn't include any special character!",
      pattern: "^[a-zA-Z]+$",
    },
    {
      id: "licensenumber",
      label: "License Number",
      type: "text",
      errorMessage:
    "License Number   shouldn't include any special character!",
    pattern: "^[0-9]{8}",

    },
  ];
  
  