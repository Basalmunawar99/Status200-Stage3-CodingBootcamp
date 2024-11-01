import React from 'react';

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  JoinDate: string;
  image: string;
}

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => (
  <div className="card text-center mb-4" style={{ width: '18rem' }}>
    <img
      className="card-img-top rounded-circle mt-3 mx-auto"
      src={employee.image || 'https://via.placeholder.com/100'}
      alt={`${employee.name}'s profile`}
      style={{ width: '100px', height: '100px' }}
    />
    <div className="card-body">
      <h5 className="card-title">{employee.name}</h5>
      <p className="card-text text-muted">{employee.role}</p>
      <p className="card-text"><strong>Department:</strong> {employee.department}</p>
      <p className="card-text"><strong>Join Date:</strong> {employee.JoinDate}</p>
    </div>
  </div>
);

export default EmployeeCard;
