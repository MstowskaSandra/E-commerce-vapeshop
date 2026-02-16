import styled, { keyframes } from "styled-components";

const infiniteScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const ReviewsCarousel = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding: 2.5rem 1.25rem;
`;

export const ReviewsTrack = styled.div`
  display: flex;
  animation: ${infiniteScroll} 20s linear infinite;
  gap: 1.5rem;
  
  &:hover {
    animation-play-state: paused;
  }
`;

export const ReviewCard = styled.div`
  flex: 0 0 24rem;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 8px 8px 10px black;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  flex-shrink: 0;
`;

export const ReviewMeta = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ReviewTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 2px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReviewDate = styled.span`
  font-size: 0.75rem;
  color: #5f6368;
  font-weight: 400;
`;

export const Stars = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 0.75rem;
`;

export const Star = styled.span`
  width: 1rem;
  height: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fbbc04'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
  background-size: cover;
  display: block;
`;

export const ReviewText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #1f1f1f;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 3.75rem 1.25rem;
  font-size: 1rem;
  color: #5f6368;
`;

export const Error = styled.div`
  text-align: center;
  padding: 3.75rem 1.25rem;
  color: #d93025;
  font-size: 1rem;
`;