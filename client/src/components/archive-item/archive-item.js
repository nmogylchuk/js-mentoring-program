import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './archive-item.css';

const ArchiveItem = ({ archiveItem: { description, status } }) => {
  return (
    <div className='archive-item list-group-item'>
      {status === 'SUCCESS' ? (
        <button className='archive-item__button archive-item__button--done'>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      ) : (
        <button className='archive-item__button archive-item__button--failure'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      <span className={`archive-item__label ${status === 'SUCCESS' ? 'archive-item__label--done' : ''}`}>{description}</span>
    </div>
  );
};

export default ArchiveItem;
