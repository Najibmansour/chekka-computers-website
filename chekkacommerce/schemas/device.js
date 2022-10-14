    export default {
    name: 'device',
    title: 'Device',
    type: 'document',
    fields: [
      {
        name: "docid",
        title: "ID",
        readOnly: true,
        type: "string",
        initialValue: () => {
          let d = new Date();
          let str = d.getTime().toString();
          return str.slice(4,10)

        }},
       { 
        name: 'deviceName',
        title: 'DeviceName',
        type: 'string',
        },
        { 
        name: 'ownerName',
        title: 'OwnerName',
        type: 'string',
        },
       { 
        name: 'contact',
        title: 'Contact',
        type: 'string',
        },
        
      {
        name: "date",
        title: "Date added",
        type: "string",
        readOnly: true,
        initialValue: () => {
          let d = new Date();
          return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`

        }
      } 
   
   ]
    }

