import { createGlobalStyle } from 'styled-components'
import { colors, fonts, sizes } from './constants'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${colors.darkPurple};
    font-family: ${fonts.sansSerif};
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.02em;
  }

  h1, h2, h3, h4, h5, h6 {
    opacity: 80%;
    margin: 5px 0;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    letter-spacing: 0.04em;

    @media(max-width: ${sizes.mobile}) {
      font-size: 40px;
      line-height: 48px;
    }
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0.04em;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.02em;
  }

  a {
    color: ${colors.lightPurple} ;
    text-decoration: none;
    transition: text-decoration ease-in .2s;
    
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    margin: 5px 0 15px;
	  padding: 0;
  }

  li {
    list-style: none;
		position: relative;
		padding: 0 0 0 30px;

    &:before {
      content: "";
			position: absolute;
			left: 0;
			top: 11px;
			width: 15px;
      display: block;
			border-top: 2px solid ${colors.lightPurple};
    }
  }

  footer {
    font-size: 8px;
    text-align: center;
  }

  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
  }
`;
