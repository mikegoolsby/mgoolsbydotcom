import { createGlobalStyle } from "styled-components"
import "fontsource-oswald";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        @media (min-width: 900px) {
            width: 100%;
            height: auto;
        }
    }
    body {
        width: 100%;
        height: 100%;
        padding: 0;
        background-color: #5CDB95;
        color: black;
        font-size: 1.125rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
        color: black;
        @media (min-width: 1200px) {
            font-size: 2.625rem;
            line-height: 4rem;
        }
    }
    h2 {
        font-family: 'Oswald';
        line-height: 1.6;
        color: white;
        text-align: center;
        @media (max-width: 900px) {
            font-size: 1.2rem;
            line-height: 1.4rem;
        }
    }
    h3 {
        font-family: 'Oswald';
        font-size: 40px;
        color: #EDF5E1;
        text-align: center;
        margin-top: 70px;
        margin-bottom: 5px;
        @media (max-width: 900px) {
            font-size: 40px;
            line-height: 1.4rem;
        }
    }
    h4 {
        font-family: 'Oswald';
        line-height: 1.6;
        color: #05386B;
        text-align: center;
        @media (min-width: 1200px) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }
    p {
        font-family: 'Oswald';
        line-height: 1.6;
        color: #05386B;
        text-align: center;
        margin: 10px;
        @media (max-width: 900px) {
            width: 100%;
        }
    }
    #style-me{
        color: white;
        align-items: center;
        font-size: 20px;
        font-weight: 400;
    }
    #experience {
        display: flex;
        justify-context: flex-end;
        margin-top: 100px;
    }
    #projects {
        display: flex;
        flex-direction: column;
        justify-context: center;
        align-items: center;
        margin-top: 100px;
    }
    #photos {
        margin-top: 100px;
    }
    #contact {
        display: flex;
        justify-context: flex-end;
        margin-top: 100px;
        margin-right: 1px;
        text-align: right;
    }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        font-family: 'Oswald';
        font-size: 16px;
        &:hover,
        &:focus {
          outline: 0;
        },
        margin: 7px;
        padding: 9px;
        @media  (max-width: 900px) {
            font-size: 22px;
            display: flex;
            justify-content: space-around;
        }
    }
    .projects {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 55px;
    }
    li {
        font-family: 'Oswald';
        line-height: 1.6;
        color: #05386B;
        font-size: 24px;
        text-align: right;
        list-style-type: none;
        @media (min-width: 300px) {
            font-size: 1.2rem;
            line-height: 3rem;
        }
    }
    .a-mobile {
        font-family: 'Oswald';
        line-height: 1.6;
        color: #05386B;
        font-size: 24px;
        text-align: right;
        list-style-type: none;
        @media (max-width: 900px) {
            display: flex;
            justify-content: flex-end;
            padding: 0;
            font-size: 16px;
            line-height: 1.1;
            color: #FFFFFF;
        }
    }
    .contact-listing-li {
        font-family: 'Oswald';
        line-height: 1.6;
        color: #05386B;
        font-size: 24px;
        text-align: right;
        list-style-type: none;
        @media (max-width: 900px) {
            margin-top: 11px;
            font-size: 16px;
            line-height: 1.1;
        }
    }
    #me {
        height: 500px;
        width: auto;
        margin-left: 30px;
        border-style: solid;
        border-radius: 7px;
        border-color: white;
        @media (max-width: 900px) {
            height: 220px;
            width: auto;
        }
    }
    .proj-img {
        height: 350px;
        width: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 7px;
        border-style: solid;
        border-color: white;
        transition: .5s ease;
        backface-visibility: hidden;
        opacity: 1;
        @media (max-width: 900px) {
            width: auto;
            height: 160px;
        }
    }
    .hvr-grow {
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        transition-duration: 0.3s;
        transition-property: transform;
    }
    .hvr-grow:hover,
    .hvr-grow:focus,
    .hvr-grow:active {
        transform: scale(1.03);
        cursor: pointer;
    }
    section {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 15px;
    }
    .photo-text {
        text-align: left;
        line-height: 1.6;
        @media (max-width: 900px) {
            font-size: 1.2rem;
            line-height: 1.4rem;
        }
    }
    .port-img {
        border-radius: 7px;
        border-style: solid;
        border-color: white;
        transition: .5s ease;
        @media (max-width: 900px) {
            width: auto;
            height: 240px;
        }
    }
`

export default GlobalStyle