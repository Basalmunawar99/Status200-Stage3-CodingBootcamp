import React from 'react';
import EmployeeCard from './EmployeeCard';
import { Employee } from './EmployeeCard';

interface EmployeeGridProps {
  employees: Employee[];
  searchTerm: string;
}

const EmployeeGrid: React.FC<EmployeeGridProps> = ({ employees, searchTerm }) => {
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        {filteredEmployees.map(employee => (
          <div key={employee.id} className="col-md-4 col-lg-3 d-flex align-items-stretch">
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeGrid;
