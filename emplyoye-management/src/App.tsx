import { useState } from 'react';
import './App.css';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeGrid from './components/EmployeeGrid';
import { Employee } from './components/EmployeeCard';
import EmployeeNew from './components/EmployeeNew';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: '1', name: 'Shah-Rukh Khan', role: 'CEO', department: 'IT', JoinDate: 'Feb 9, 1980', image: '' },
    { id: '2', name: 'Emma Watson', role: 'Chief Marketing Officer', department: 'Marketing', JoinDate: 'March 8, 1994', image: '' },
    { id: '3', name: 'Elon Musk', role: 'Chief Technology Officer', department: 'Engineering', JoinDate: 'Jan 15, 2000', image: '' },
    { id: '4', name: 'Gal Gadot', role: 'Head of Design', department: 'Design', JoinDate: 'May 14, 2005', image: '' },
    { id: '5', name: 'Dwayne Johnson', role: 'Director of Operations', department: 'Operations', JoinDate: 'July 30, 2007', image: '' },
    { id: '6', name: 'Rihanna', role: 'Creative Director', department: 'Creative', JoinDate: 'July 1, 2010', image: '' },
    { id: '7', name: 'Chris Hemsworth', role: 'Lead Developer', department: 'Development', JoinDate: 'May 23, 1975', image: '' },
    { id: '8', name: 'Taylor Swift', role: 'Product Manager', department: 'Product', JoinDate: 'May 23, 1990', image: '' },
    { id: '9', name: 'Lionel Messi', role: 'Senior Analyst', department: 'Analytics', JoinDate: 'Jan 4, 1989', image: '' },
    { id: '10', name: 'Oprah Winfrey', role: 'Public Relations Manager', department: 'Public Relations', JoinDate: 'Jan 19, 1954', image: '' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addEmployee = (newEmployee: Employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4 text-center">Employee Card Management System</h1>
      <EmployeeSearch onSearch={setSearchTerm} />
      <EmployeeGrid employees={employees} searchTerm={searchTerm} />
      <EmployeeNew onAddEmployee={addEmployee} />
    </div>
  );
}

export default App;
