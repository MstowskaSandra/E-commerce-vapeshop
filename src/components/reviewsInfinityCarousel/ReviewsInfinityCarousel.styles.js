import styled from "styled-components";

export const Carousel = styled.div`
  margin: 4rem auto;
  width: 100%;
  height: 280px;
  display: flex;
  overflow-x: hidden;
  padding: 1rem;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-right: 2rem;
  animation: spin 35s infinite linear;

  @keyframes spin {
    from {
      translate: 0;
    }
    to {
      translate: -100%;
    }
  }

  ${Carousel}:hover & {
    animation-play-state: paused;
  }
`;

export const Card = styled.div`
  flex: 0 0 320px;
  height: 100%;
  background: #fff;
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 8px 8px 10px black;
  border: 1px solid #e0e0e0;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
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
  background: linear-gradient(135deg, #4285f4, #34a853);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  flex-shrink: 0;
  font-family:
    "Google Sans",
    -apple-system,
    sans-serif;
`;

export const ReviewMeta = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ReviewTitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: #202124;
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
