import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.85),
    rgba(0, 0, 0, 0.95)
  );
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 9999;
  animation: fadeOverlay 0.3s ease forwards;
width: 100%;
height: 100%;
pointer-events: all;


  @keyframes fadeOverlay {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalCard = styled.div`
  background: linear-gradient(145deg, #111, #1a1a1a);
  width: 100%;
  max-width: 40rem;
  color: #f5f5f5;
  border-radius: 1.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow:
    0 0 2rem rgba(250, 29, 178, 0.25),
    0 2rem 4rem rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(250, 29, 178, 0.2);
  font-family: "Barlow Semi Condensed", sans-serif;

  /* animation: ${({ $isClosing }) =>
    $isClosing ? "scaleOut 0.3s ease forwards" : "scaleIn 0.3s ease forwards"};

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: translateY(1.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes scaleOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(1rem) scale(0.95);
    }
  } */
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.4;

  background: linear-gradient(90deg, #fa1db2, #ff6ec7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 1.5rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
`;

export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  span:last-child {
    font-weight: 600;
    color: #fa1db2;
  }
`;

export const InfoText = styled.p`
  text-align: center;
  line-height: 1.6;
  font-size: 1rem;
  color: rgba(255,255,255,0.8);
`;

export const CloseBtn = styled.button`
  align-self: center;
  padding: 0.8rem 2rem;
  border-radius: 1rem;
  background: rgba(250, 29, 178, 0.1);
  border: 1px solid #fa1db2;
  color: #fa1db2;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.25s ease;

  &:hover {
    background: #fa1db2;
    color: black;
    box-shadow: 0 0 1.2rem rgba(250, 29, 178, 0.6);
    transform: translateY(-2px);
  }
`;
