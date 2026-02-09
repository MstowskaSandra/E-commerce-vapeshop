import * as S from "./Pagination.styles";
import {ArrowLeft, ArrowRight } from 'lucide-react';

const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const goToPrev = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const goToNext = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
    }
  };

  return (
    <S.PaginationContainer>
      <S.NavButton onClick={goToPrev} disabled={page === 1}>
        <ArrowLeft />
      </S.NavButton>

      {pages.map((pageNumber) => (
        <S.PageButton
          key={pageNumber}
          isActive={pageNumber === page}
          disabled={pageNumber === page}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </S.PageButton>
      ))}

      <S.NavButton
        onClick={goToNext}
        disabled={page === totalPages}
      >
        <ArrowRight />
      </S.NavButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
