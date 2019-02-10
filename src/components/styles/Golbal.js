import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import theme from "./Theme";

import FontAwesome from "./Fonts/FontAwesome";
import PrimaryFonts from "./Fonts/PrimaryFonts";
import SecondaryFonts from "./Fonts/SecondaryFonts";

const GlobalStyle = createGlobalStyle`
/* Browser Reset */
${styledNormalize}
/* Fonts */
${FontAwesome}
${PrimaryFonts}
${SecondaryFonts}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden !important;
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'lato';
    font-weight: normal;
    letter-spacing: 0.1rem;
    line-height: 1.5;
    overflow-x: hidden !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.8rem;
    font-weight: normal;
    line-height: ${theme.baseLineHeight};
  }
  h1 {
	font-size: 3.2rem;
  @media (min-width: ${theme.bpTablet}) {
    font-size: 4rem;
  }
	@media (min-width: ${theme.bpDesksm}) {
    font-size: 4.8rem;
  }
	@media (min-width: ${theme.bpDeskmd}) {
    font-size: 5.2rem;
  }
	@media (min-width: ${theme.bpDesklg}) {
    font-size: 5.6rem;
  }
}

h2 {
  font-size: 2.6rem;
  @media (min-width: ${theme.bpTablet}) {
    font-size: 3.2rem;
  }
	@media (min-width: ${theme.bpDesksm}) {
    font-size: 3.6rem;
  }
	@media (min-width: ${theme.bpDeskmd}) {
    font-size: 4rem;
  }
	@media (min-width: ${theme.bpDesklg}) {
    font-size: 4.6rem;
  }
}

h3 {
  font-size: 2.2rem;
  @media (min-width: ${theme.bpTablet}) {
    font-size: 2.4rem;
  }
	@media (min-width: ${theme.bpDesksm}) {
    font-size: 2.8rem;
  }
	@media (min-width: ${theme.bpDeskmd}) {
    font-size: 3rem;
  }
	@media (min-width: ${theme.bpDesklg}) {
    font-size: 3.4rem;
  }
}

h4 {
  font-size: 2rem;
  @media (min-width: ${theme.bpTablet}) {
    font-size: 2.2rem;
  }
	@media (min-width: ${theme.bpDesksm}) {
    font-size: 2.4rem;
  }
	@media (min-width: ${theme.bpDeskmd}) {
    font-size: 2.6rem;
  }
	@media (min-width: ${theme.bpDesklg}) {
    font-size: 2.8rem;
  }
}

p {
  margin: 0;
  margin-bottom: 1.5em;
  font-size: 1.6rem;
  line-height: 1.4;
}

a {
  text-decoration: none;
  color: ${props => props.theme.green};
  font-size: 1em;
  font-weight: normal;
  transition: all 0.3s ease;
}

a:hover {
	color: ${props => props.theme.blue}
}

span {
  font-size: 1em;
}

ul,
li {
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
`;

export default GlobalStyle;
