import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ArchiveItem from './../ArchiveItem/ArchiveItem';
import archiveList from './../../data/archive.json';
import './Archive.scss';

const Archive = () => {
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    const getArchiveList = setTimeout(() => {
      setArchive(archiveList);
    }, 200);
    return () => {
      clearTimeout(getArchiveList);
    };
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
