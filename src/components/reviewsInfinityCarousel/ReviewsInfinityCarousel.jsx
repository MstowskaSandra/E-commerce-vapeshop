import { useReviews } from "../../hooks/useReviews"; 
import * as S from "./ReviewsInfinityCarousel.styles";

const ReviewsInfiniteCarousel = () => {
  const { reviews, loading, error } = useReviews();

  if (loading) return <S.Loading>Ładowanie opinii...</S.Loading>;
  if (error || !reviews.length)
    return <S.Error>Brak opinii do wyświetlenia</S.Error>;

  return (
    <S.Carousel>
      <S.Group>
        {reviews.map((review, index) => (
          <S.Card key={`${review.id}-${index}`}>
            <S.ReviewHeader>
              <S.Avatar>{review.UserName.charAt(0).toUpperCase()}</S.Avatar>
              <S.ReviewMeta>
                <S.ReviewTitle>{review.UserName}</S.ReviewTitle>
                <S.ReviewDate>{review.Date}</S.ReviewDate>
              </S.ReviewMeta>
            </S.ReviewHeader>
            <S.Stars>
              <S.Star />
              <S.Star />
              <S.Star />
              <S.Star />
              <S.Star />
            </S.Stars>
            <S.ReviewText>{review.Review}</S.ReviewText>
          </S.Card>
        ))}
      </S.Group>
      <S.Group aria-hidden>
        {reviews.map((review, index) => (
          <S.Card key={`${review.id}-${index}`}>
            <S.ReviewHeader>
              <S.Avatar>{review.UserName.charAt(0).toUpperCase()}</S.Avatar>
              <S.ReviewMeta>
                <S.ReviewTitle>{review.UserName}</S.ReviewTitle>
                <S.ReviewDate>{review.Date}</S.ReviewDate>
              </S.ReviewMeta>
            </S.ReviewHeader>
            <S.Stars>
              <S.Star />
              <S.Star />
              <S.Star />
              <S.Star />
              <S.Star />
            </S.Stars>
            <S.ReviewText>{review.Review}</S.ReviewText>
          </S.Card>
        ))}
      </S.Group>
    </S.Carousel>
  );
};

export default ReviewsInfiniteCarousel;
