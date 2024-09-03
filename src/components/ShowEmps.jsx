import React, { useEffect, useState } from "react";
import { deleteEmployee, getEmployeeDetails } from "../service/apiService";
import { Link, useNavigate } from "react-router-dom";
function ShowEmps() {
  const [employee, setEmployee] = useState([]);
  const navigator = useNavigate();
  const emp = [
    {
      id: "1",
      firstName: "a",
      lastName: "b",
      email: "abc@",
    },
    {
      id: "1",
      firstName: "a",
      lastName: "b",
      email: "abc@",
    },
    {
      id: "1",
      firstName: "a",
      lastName: "b",
      email: "abc@",
    },
  ];

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  const fetchEmployeeDetails = async () => {
    const data = await getEmployeeDetails();
    setEmployee(data);
    console.log(data);
    console.log(employee[0]);
  };
  const handleClick = (id) => {
    navigator(`/updateemployee/${id}`);
  };

  function handleDelete(id) {
    

    deleteEmployee(id)
      .then((response) => {
        console.log(response.data);
        fetchEmployeeDetails();
      })
      .catch((error) => {
        console.log("I am delete MAN ");
        console.log(error);
      });
  }

  return (
    <div className="showempcontainer">
      <h2 className="text-center">List of Employees</h2>
      <Link to="/addemployee">
        <button className="btn btn-primary">Add Employee</button>
      </Link>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Employee FirstName</th>
            <th scope="col">Employee LastName</th>
            <th scope="col">Employee MailId</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(e.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(e.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowEmps;
