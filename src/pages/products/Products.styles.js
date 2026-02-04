import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

// export const Button = styled.button`
//   width: 8rem;
//   height: 3rem;
//   text-align: center;
//   font-family: "Barlow Semi Condensed", sans-serif;
//   font-weight: 600;
//   letter-spacing: 1px;
//   font-size: 1.1rem;
//   border-radius: 16px;
//   background: linear-gradient(
//     90deg,
//     #ff6adf 0%,
//     #b56cff 35%,
//     #5fd3ff 70%,
//     #45f3e5 100%
//   );
//   box-shadow:
//     0 6px 14px rgba(0, 0, 0, 0.35),
//     inset 0 1px 0 rgba(255, 255, 255, 0.35);
//   border: 1px solid gray;

//   transition:
//     transform 220ms cubic-bezier(0.4, 0, 0.2, 1),
//     box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1),
//     filter 220ms ease;

//   &:hover {
//     transform: translateY(-2px) scale(1.03);
//     filter: brightness(1.08) saturate(1.1);

//     box-shadow:
//       0 10px 24px rgba(0, 0, 0, 0.45),
//       0 0 18px rgba(181, 108, 255, 0.55),
//       inset 0 1px 0 rgba(255, 255, 255, 0.45);
//   }

//   &:active {
//     transform: translateY(1px) scale(0.98);
//     filter: brightness(0.95);

//     box-shadow:
//       0 4px 8px rgba(0, 0, 0, 0.4),
//       inset 0 3px 6px rgba(0, 0, 0, 0.35);
//   }

//   &.active {
//     transform: translateY(0) scale(1);
//     filter: brightness(1.1);
//     border: 2px solid red;

//     box-shadow:
//       0 8px 18px rgba(0, 0, 0, 0.45),
//       0 0 20px rgba(181, 108, 255, 0.6);

//     pointer-events: none; /* opcjonalnie */
//   }
// `;

export const Button = styled.button`
  width: 8rem;
  height: 3rem;

  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.1rem;

  border-radius: 16px;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;

  box-shadow:
    0 6px 14px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);

  transition:
    transform 220ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 220ms ease,
    background 220ms ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    border-color: rgba(255, 255, 255, 0.45);

    box-shadow:
      0 10px 22px rgba(0, 0, 0, 0.45),
      0 0 16px rgba(250, 29, 178, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.45);
  }

  &.active {
    background: rgba(250, 29, 178, 0.15);
    border-color: #fa1db2;
    color: #fa1db2;

    box-shadow:
      0 0 12px rgba(250, 29, 178, 0.6),
      0 0 28px rgba(250, 29, 178, 0.8),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);

    pointer-events: none;
  }

  &:active:not(.active) {
    transform: translateY(1px) scale(0.97);

    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.45),
      inset 0 3px 6px rgba(0, 0, 0, 0.4);
  }

  /* &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(250, 29, 178, 0.6),
      0 6px 14px rgba(0, 0, 0, 0.35);
  } */
`;
