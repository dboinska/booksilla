import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components/macro";
import LoginPage from "../Account/Login/LoginPage";
import SearchPage from "../Pages/SearchPage";
import SignUpPage from "../Account/SignUp/SignUpPage";

function App() {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-color:#ffc400;
    --second-color: #ffe89d;
    --main-light: #ffdb65;
    --light-gray: #e3e3d7;
    --white-gray: #fafaf8;
    --white: #fff;
    --gray: #bfbf94;
    --brown: #704816;
    --black: #000;

    --yellow-gradient: linear-gradient(
    180deg,
    hsl(46deg 100% 50%) 0%,
    hsl(45deg 100% 60%) 5%,
    hsl(45deg 100% 65%) 10%,
    hsl(46deg 100% 70%) 16%,
    hsl(46deg 100% 80%) 22%,
    hsl(45deg 100% 90%) 29%,
    hsl(0deg 0% 100%) 37%,
    hsl(45deg 100% 90%) 46%,
    hsl(46deg 100% 80%) 56%,
    hsl(46deg 100% 70%) 66%,
    hsl(45deg 100% 65%) 77%,
    hsl(45deg 100% 60%) 89%,
    hsl(46deg 100% 50%) 100%
  );

  --brown-gradient: linear-gradient(
  180deg,
  hsl(33deg 67% 26%) 0%,
  hsl(32deg 46% 35%) 26%,
  hsl(31deg 33% 44%) 48%,
  hsl(30deg 27% 53%) 66%,
  hsl(29deg 28% 62%) 78%,
  hsl(29deg 29% 72%) 87%,
  hsl(28deg 30% 81%) 93%,
  hsl(28deg 31% 90%) 97%,
  hsl(0deg 0% 100%) 100%
);
  }
  body {
        margin: 0;
        padding: 0;
        
        font-family: "Pacifico", cursive;
        box-sizing: border-box;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }
`;

export default App;
