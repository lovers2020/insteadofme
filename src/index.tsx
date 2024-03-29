import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/fonts/pretendard-subset.css";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        background-color: white; 
        color:white;
        font-family: "Pretendard",system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box; 
        height: 100%;
        line-height: 1.6;    
        overflow-x: hidden; 
        position:relative;
        letter-spacing: 1.5px;
    } 
    a {
    text-decoration: none;
    }
    * {
    box-sizing: border-box;
    }
`;
root.render(
    <RecoilRoot>
        <ChakraProvider>
            <HelmetProvider>
                <GlobalStyle />
                <App />
            </HelmetProvider>
        </ChakraProvider>
    </RecoilRoot>
);
