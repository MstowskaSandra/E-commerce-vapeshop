// import styled from "styled-components";

// export const StoresSection = styled.div`
//     width: 100%;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 4rem 0;
//     border: 1px white solid;

//     h1 {
//         padding-bottom: 2rem;
//         font-family: "Barlow Semi Condensed", sans-serif;
//         font-size: 3.125rem;
//         font-weight: 600;
//         letter-spacing: 1px;
//         text-transform: uppercase;
//         border: 1px solid green;
//     }
// `;

// export const Story = styled.section`
//     display: flex;
//     align-items: start;
//     flex-direction: column;
//     width: 75%;
//     border: 1px solid yellow;
//     animation: fadeUp both;
//     animation-timeline: view(10% 5%);

//   @keyframes fadeUp {
//     from {
//       opacity: 0;
//       transform: translateY(10px) scale(0.5);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0) scale(1);
//     }
//   }

    

//     p {
//         text-align: left;
//         padding-bottom: 2rem;
//         font-family: "Barlow", sans-serif;
//         font-size: 1.1rem;
//         font-weight: 400;
//         letter-spacing: 1px;
//         border: 1px solid red;
//         text-transform: uppercase;
//     }
// `;

// export const EndTxt = styled.p`
//         padding: 4rem 0;
//         font-family: "Barlow Semi Condensed", sans-serif;
//         font-size: 3.125rem;
//         font-weight: 600;
//         letter-spacing: 1px;
//         text-transform: uppercase;
//         border: 1pc solid red;
//         line-height: 1.05;
// `;

import styled from "styled-components";

export const StoresSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  h1 {
    padding-bottom: 2rem;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 3.125rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const Story = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
  
  p {
    text-align: left;
    padding-bottom: 2rem;
    font-family: "Barlow", sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 1px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s forwards;
  }

  p:nth-child(1) { animation-delay: 0.1s; }
  p:nth-child(2) { animation-delay: 0.25s; }
  p:nth-child(3) { animation-delay: 0.4s; }
  p:nth-child(4) { animation-delay: 0.55s; }
  p:nth-child(5) { animation-delay: 0.7s; }
  p:nth-child(6) { animation-delay: 0.85s; }
  p:nth-child(7) { animation-delay: 1s; }
  p:nth-child(8) { animation-delay: 1.15s; }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const EndTxt = styled.p`
  padding: 4rem 0 0 0;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 3.125rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1.05;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s forwards;
  animation-delay: 1.3s;
`;
