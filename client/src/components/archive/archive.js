import React, { useEffect, useState } from 'react';
import ArchiveItem from './../archive-item/archive-item';
import archiveList from './../../data/archive.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './archive.css';

const Archive = () => {
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    try {
      const getArchiveList = setTimeout(() => {
        setArchive(archiveList);
      }, 200);
      return () => {
        clearTimeout(getArchiveList);
      };
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className='archive'>
      <h2 className='archive__title'>Task archive</h2>
      <ul className='archive__list'>
        {archive.map(archiveItem => (
          <ArchiveItem key={archiveItem.id} archiveItem={archiveItem} />
        ))}
      </ul>

      <Link to='/tasks'>
        <FontAwesomeIcon className='archive__link' icon={faArrowLeft} size='2x' />
      </Link>
    </div>
  );
};

export default Archive;
