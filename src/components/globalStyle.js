import { createGlobalStyle } from "styled-components"
import "fontsource-oswald";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        width: 100%;
        height: 100%;
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
        @media (min-width: 1200px) {
            font-size: 2rem;
            line-height: 3rem;
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
        justify-context: center;
        align-items: center;
        margin-top: 100px;
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
    }
    .projects {
        text-align: center;
    }
    li {
        font-family: 'Oswald';
        line-height: 1.6;
        color: #05386B;
        text-align: right;
        list-style-type: none;
        animation: fadeIn ease 1s;
        @media (min-width: 1200px) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }
    #me {
        height: 500px;
        width: auto;
        margin-left: 30px;
        border-style: solid;
        border-radius: 7px;
        border-color: white;
        @media: {
            width: 100%;
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
    }
    .hvr-grow {
        display: inline-block;
        vertical-align: middle;
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
`

export default GlobalStyle