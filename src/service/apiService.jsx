import axios from "axios";

const API_URL='http://localhost:9090';

export const getEmployeeDetails = async() => {
    try {  
        console.log("Fetching employee details");
        const res=await axios.get(`${API_URL}/api/employees/getallemps`)
        return res.data;
    } catch (error) {
        console.log("Error in apiService");
        throw error;
    }
} 
export const AddNewEmployee= async(employee) => {
    try {  
        console.log("Adding Employee");
        const res=await axios.post(`${API_URL}/api/employees/addemp`,employee)
        console.log("Employee gets added");
        return res;
    } catch (error) {
        console.log("Error in apiService");
        throw error;
    }
}

export const getEmployee =(employeeId)=>axios.get(`${API_URL}/api/employees/getsingleemp` + '/' + employeeId);

export const updateemployee =(employeeId,employee)=>axios.put(`${API_URL}/updateemp` + '/' + employeeId,employee);

export const deleteEmployee= (employeeId)=>axios.delete(`${API_URL}/delete` + '/' + employeeId);