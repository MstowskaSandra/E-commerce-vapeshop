import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const overlayStyles = css`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Overlay = styled.div`
  ${overlayStyles}
  background: rgba(235, 234, 234, 0.8);
  backdrop-filter: blur(3px);
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Icon = styled.div`
  font-size: 4rem;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 0.75rem;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  color: #666;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

export const AcceptBtn = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(40, 167, 69, 0.4);
  }
`;

export const RejectBtn = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  background: #6c757d;
  color: white;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(108, 117, 125, 0.4);
  }
`;

// Mobile-first responsive
export const responsiveContent = css`
  @media (max-width: 480px) {
    padding: 32px 24px;
    ${Buttons} {
      flex-direction: column;
    }
    ${Title} {
      font-size: 1.5rem;
    }
  }
`;
