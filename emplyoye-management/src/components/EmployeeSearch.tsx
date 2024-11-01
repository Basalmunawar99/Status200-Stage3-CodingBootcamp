import React from 'react';

interface EmployeeSearchProps {
  onSearch: (term: string) => void;
}

const EmployeeSearch: React.FC<EmployeeSearchProps> = ({ onSearch }) => {
  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Enter name"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="btn btn-outline-secondary" type="button" onClick={() => onSearch('')}>Clear</button>
      </div>
    </div>
  );
};

export default EmployeeSearch;
