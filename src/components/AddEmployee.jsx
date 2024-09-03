import React, { useEffect, useState } from "react";
import { AddNewEmployee, getEmployee, updateemployee } from "../service/apiService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //   useState(()=>{
  //     console.log("hello");
  //   },[])
  const navigator = useNavigate();

  const {id}=useParams();
  function pageTitle(){
    if(id){
      return <h2 className='text-center' >Update Employee</h2>
    }else{
      return <h2 className='text-center' >Add Employee</h2>
    }
  }
  

  function addOrUpdateEmp(e) {
    e.preventDefault();
  
    if(validateForm()){
        const employee = { firstName, lastName, email };
        console.log(employee);
        //if update operagtion need to be performed
        if(id){
          updateemployee(id,employee).then((response)=>{
            console.log(response.data);
            navigator("/");
          }).catch(error =>{
            console.log("I am update MAN ")
            console.log(error);
          })
        }else{
           //if we are adding employee not updating him
          AddNewEmployee(employee).then((response) => {
            console.log(response.data);
            navigator("/");
          }).catch(error =>{
            console.log(error);
          })
        }

      
        // const timer = setTimeout(() => {
        //   setMessage("10 seconds have passed!");
        // }, 10000); // 10000 milliseconds = 10 seconds
    
    }
   
  }
  //  const handleFirstName = (e)=>{
  //     setFirstName(e.target.value);
  //  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }  

  //validation part
  const [errors,setErrros]=useState({
    firstName:'',
    lastName:'',
    email:''
  })
   
function validateForm(){
    let valid=true;
    const errorsCopy ={...errors};
   if(firstName.trim){
      errorsCopy.firstName='';
   }else{
    errorsCopy.firstName='First Name is Required';
    valid=false;
   }  
   if(lastName.trim){
    errorsCopy.lastName='';
 }else{
  errorsCopy.lastName='Last Name is Required';
  valid=false;
 }  
 if(email.trim()){
    errorsCopy.email='';
 }else{
    errorsCopy.email='Email is Required';
    valid=false;
 }
 setErrros(errorsCopy);
 return valid;
}   

useEffect(()=>{
   if(id){
       getEmployee(id).then((response)=>{
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
       }).catch(error=>{
           console.log(error);
       })
   }
},[id])

  return (
    <div>
         {pageTitle()}
      <form>
        <div className="form-group mb-2">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={firstName}
            className={`form-control ${errors.firstName ? 'is-invalid':''}`}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <div className="invalid-feedback" >{errors.firstName} </div>}
        </div>

        <div className="form-group mb-2">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={lastName}
            className={`form-control ${errors.lastName ? 'is-invalid':''}`}
            onChange={handleLastName}
          />
          {errors.lastName && <div className="invalid-feedback" >{errors.lastName} </div>}
        </div>

        <div className="form-group mb-2">
          <input
            type="email"
            placeholder="Enter Email Id"
            name="email"
            value={email}
            className={`form-control ${errors.email ? 'is-invalid':''}`}
            onChange={handleEmail}
          />
          {errors.email && <div className="invalid-feedback" >{errors.email} </div>}
        </div>
        <button className="btn btn-success" onClick={addOrUpdateEmp}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddEmployee;
