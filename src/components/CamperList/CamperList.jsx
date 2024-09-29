import { useSelector } from 'react-redux';
import { selectFilteredCamps } from '../../redux/campers/selectors.js';
import CampItem from '../CamperItem/CamperItem';
import { useState, useRef } from 'react';
import { List, Item, LoadMoreBtn } from './CamperList.styled.js';

export default function CamperList() {
  const camps = useSelector(selectFilteredCamps);
  const [itemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef(null);

  const totalPages = Math.ceil(camps.length / itemsPerPage);
  const displayedCamps = camps.slice(0, currentPage * itemsPerPage);

  const loadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => {
        listRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div>
      <List>
        {displayedCamps.map((camp) => (
          <Item ref={listRef} key={camp.id}>
            <CampItem camp={camp} />
          </Item>
        ))}
      </List>
      {currentPage < totalPages && (
        <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
      )}
    </div>
  );
}
