import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
`;

export const Form = styled.form`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  padding: 3rem;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus, 
  &:hover {
    outline: none;
    border-color: #fa1db2aa;
    transition: all 0.2s ease-in-out;
    box-shadow: 8px 8px 12px #fa1db2aa;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus, 
  &:hover {
    outline: none;
    border-color: #fa1db2aa;
    transition: all 0.2s ease-in-out;
    box-shadow: 8px 8px 12px #fa1db2aa;
  }
  

  option {
    background: #100023;
    color: white;
    padding: 0.5rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  border-radius: 20px;
  border: 3px solid black;
  box-shadow: 10px 10px 15px black;
  background-color: whitesmoke;
  color: black;

  &:hover {
    border-color: #fa1db2aa;
    transform: translateX(4px);
    transition: all 0.2s ease-in-out;
    box-shadow: 8px 8px 12px #fa1db2aa;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
`;

export const CheckboxInput = styled.input`
  margin: 0.25rem 0 0 0;
  accent-color: #fff;
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 4px 8px #fa1db2aa;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  font-size: 0.95rem;
  line-height: 1.4;
  cursor: pointer;
  user-select: none;
  gap: 1rem;
`;


export const ErrorText = styled.span`
    text-align: center;
    color: #ff1744;
    line-height: 1.2;
    letter-spacing: 1px;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    margin-top: -0.5rem;
`;

