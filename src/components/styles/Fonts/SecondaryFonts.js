import * as roboto from "../../../fonts/roboto";

const SecondaryFonts = `
@font-face {
  font-family: "roboto";
  font-style: normal;
  font-weight: 300;
  src:
    local("roboto Light"),
    local("roboto-Light"),
    url("${roboto.roboto300WOFF2}") format("woff2"),
    url("${roboto.roboto300WOFF}")  format("woff");
}

@font-face {
  font-family: "roboto";
  font-style: italic;
  font-weight: 300;
  src: 
    local("roboto Light Italic"),
    local("roboto-LightItalic"),
    url("${roboto.roboto300WOFF2ITC}") format("woff2"),
    url("${roboto.roboto300WOFFITC}")  format("woff");
}

@font-face {
  font-family: "roboto";
  font-style: normal;
  font-weight: 400;
  src:
    local("roboto Light"),
    local("roboto-Light"),
    url("${roboto.roboto400WOFF2}") format("woff2"),
    url("${roboto.roboto400WOFF}")  format("woff");
}

@font-face {
  font-family: "roboto";
  font-style: italic;
  font-weight: 400;
  src: 
    local("roboto Light Italic"),
    local("roboto-LightItalic"),
    url("${roboto.roboto400WOFF2ITC}") format("woff2"),
    url("${roboto.roboto400WOFFITC}")  format("woff");
}

@font-face {
  font-family: "roboto";
  font-style: normal;
  font-weight: 700;
  src:
    local("roboto Light"),
    local("roboto-Light"),
    url("${roboto.roboto700WOFF2}") format("woff2"),
    url("${roboto.roboto700WOFF}")  format("woff");
}
`;

export default SecondaryFonts;
