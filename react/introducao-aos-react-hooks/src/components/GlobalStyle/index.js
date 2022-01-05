import {createGlobalStyle} from 'styled-components';
import bgImg from '../../images/bg.jpeg';

const GlobalStyle = createGlobalStyle`
    body{
        color: #332c36;
        padding: 0;
        margin: 0;
        font-family: 'New Tegomin', serif;
        background: url(${bgImg}) center no-repeat;
        background-size: cover;
    }
`;

export default GlobalStyle;