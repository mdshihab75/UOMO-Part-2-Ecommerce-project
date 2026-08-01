import { useState } from 'react';
import ReactPaginate from 'react-paginate';
console.log("Outside:", ReactPaginate);

const Paginate = ({ items, itemsPerPage }) => {
  console.log("Inside:", ReactPaginate);
  const [itemOffset, setItemOffset] = useState(0);
  function Items({ currentItems }) {
    return (
      <>
        {
          currentItems.map((item) => (
            <div key={item.id || item}>
              <h3>{item.title || item}</h3>
            </div>
          ))
        }
      </>
    );
  }

  const endOffset = itemOffset + itemsPerPage;
  
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>

  )
}

export default Paginate