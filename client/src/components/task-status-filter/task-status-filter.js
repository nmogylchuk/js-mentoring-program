import React from 'react';
import './task-status-filter.css';

const filterButtons = [
  { status: 'all', label: 'All' },
  { status: 'FAILURE', label: 'Failed' },
  { status: 'SUCCESS', label: 'Archive' },
];

const TaskStatusFilter = ({ filter, onFilterChange = () => {} }) => {
  const buttons = filterButtons.map(({ status, label }) => {
    const isActive = status === filter;
    const statusClassNames = 'btn ' + (isActive ? 'btn-success' : 'btn-outline-secondary');

    return (
      <button className={statusClassNames} key={status} onClick={() => onFilterChange(status)}>
        {label}
      </button>
    );
  });

  return <div className='btn-group'>{buttons}</div>;
};

export default TaskStatusFilter;
