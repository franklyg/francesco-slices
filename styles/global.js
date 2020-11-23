import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
    html,
    body {
        padding: 0 !important;
        margin: 0 !important;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    *,
    *:after,
    *:before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    ul,li{
        list-style-type: none;
    }
    * {
        box-sizing: border-box;
    }
`

export default GlobalStyle;