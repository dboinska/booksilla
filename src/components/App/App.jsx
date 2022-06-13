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
          <Route path="/book" element={<SearchPage />} />
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
    --purple: #8800ff;
    --light-purple: #b67fe7;
    --violet: #aa28c3;
    --berry: #a10202;
    --light-brown: #8a6437;
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
  hsl(35deg 48% 33%) 29%,
  hsl(37deg 35% 40%) 44%,
  hsl(38deg 26% 48%) 55%,
  hsl(41deg 23% 55%) 64%,
  hsl(43deg 22% 63%) 72%,
  hsl(46deg 21% 71%) 79%,
  hsl(50deg 20% 80%) 86%,
  hsl(54deg 18% 88%) 93%,
  hsl(60deg 17% 98%) 100%
);

--shadow: 6px 6px 25px -12px rgba(66, 68, 90, 1);
  }
  body {
        margin: 0;
        padding: 0;
        
        font-family: "Pacifico", cursive;
        box-sizing: border-box;
        background-color: var(--white-gray);
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }
`;

export default App;
