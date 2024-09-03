import React,{useState,useEffect} from 'react'
import { getEmployeeDetails } from '../service/apiService'
function ListEmployee() {  
    // const [emp,setEmp]=useState([]);
    // useEffect(()=>{
    //     fetchEmployeeDetails();
    // },[])

    // const fetchEmployeeDetails= async()=>{
    //     const data=await getEmployeeDetails();
    //     setEmp(data);
    //     console.log(data)
    // }
  return 
    <>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Employee FirstName</th>
      <th scope="col">Employee LastName</th>
      <th scope="col">Employee MailId</th>
    </tr>
  </thead>
  <tbody>
    {/* {
         emp.map(e=>
         <tr key={e.id} >
             <td>{e.id}</td>
             <td>{e.firstName}</td>
             <td>{e.lastName}</td>
             <td>{e.email}</td>
            
          </tr>
        
         )
    } */}
  
  </tbody>
</table>
    </>
  
}

export default ListEmployee
