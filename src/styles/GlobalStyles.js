import { createGlobalStyle } from 'styled-components';
import BackgroundJPG from "../assets/background.jpg";

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.5;
    color: white;
    background-image: url(${BackgroundJPG});
    background-size: cover;      
    background-position: center; 
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  #root {
    min-height: 100vh;
    max-width: 100%;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    color: white;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
    color: white;
  }
`;


export default GlobalStyles;
