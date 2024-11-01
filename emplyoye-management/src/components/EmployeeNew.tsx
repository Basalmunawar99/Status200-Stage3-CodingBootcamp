import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  JoinDate: string;
  image: string;
}

interface EmployeeNewProps {
  onAddEmployee: (employee: Employee) => void;
}

const EmployeeNew: React.FC<EmployeeNewProps> = ({ onAddEmployee }) => {
  const [employee, setEmployee] = useState<Employee>({
    id: '',
    name: '',
    role: '',
    department: '',
    JoinDate: '',
    image: '',
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEmployee(employee);
    setEmployee({
      id: '',
      name: '',
      role: '',
      department: '',
      JoinDate: '',
      image: '',
    });
    setIsVisible(false); 
  };

  const toggleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary" onClick={toggleFormVisibility}>
        {isVisible ? 'Hide Form' : 'Register New Employee'}
      </button>
      {isVisible && (
        <div className="card mt-3 p-4">
          <h2 className="card-title">Register New Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">ID:</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={employee.id}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={employee.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Role:</label>
              <input
                type="text"
                className="form-control"
                name="role"
                value={employee.role}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Department:</label>
              <select
                name="department"
                className="form-select"
                value={employee.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Operations">Operations</option>
                <option value="Creative">Creative</option>
                <option value="Development">Development</option>
                <option value="Product">Product</option>
                <option value="Analytics">Analytics</option>
                <option value="Public Relations">Public Relations</option>
                <option value="Customer Success">Customer Success</option>
                <option value="Human Resources">Human Resources</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Join Date:</label>
              <input
                type="date"
                className="form-control"
                name="JoinDate"
                value={employee.JoinDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL:</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={employee.image}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success">Register Employee</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EmployeeNew;
