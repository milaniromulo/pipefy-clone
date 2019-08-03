import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700,800,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root{
        height: 100%;
    }

    body{
        font: 14px 'Roboto', sans-serif;
        background: #F5F5F5;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    h1{
        font: 40px 'Nunito',sans-serif;
        font-weight: 800;
    }

    ul{
        list-style: none;
    }
`;


