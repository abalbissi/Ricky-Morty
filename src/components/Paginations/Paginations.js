import React from "react";
import ReactPaginate from "react-paginate";

const Paginations = ({ info, setPageNumber, pageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center"
      forcePage={pageNumber === 1? 0 : pageNumber - 1}
      previousLabel="Prev"
      nextLabel="Next"
      nextClassName="btn btn-outline-primary"
      previousClassName="btn btn-outline-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data)=>{
        setPageNumber(data.selected + 1)
      }
      }
      pageCount={info?.pages}

    />
  );
};

export default Paginations;
