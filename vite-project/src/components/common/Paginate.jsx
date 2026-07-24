import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

  return (
    <div>Paginate start here
      <h2>pagination</h2>
      <p>Paiginate All most Done</p>
      <h3>paiginate fix</h3>
    </div>
    
  )
}

export default Paginate