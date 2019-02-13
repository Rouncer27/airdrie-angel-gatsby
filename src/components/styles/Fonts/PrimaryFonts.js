import * as lato from "../../../fonts/lato";

const PrimaryFonts = `
@font-face {
  font-family: "lato";
  font-style: normal;
  font-weight: 300;
  src:
    local("lato Light"),
    local("lato-Light"),
    url('${lato.lato300WOFF2}') format("woff2"),
    url('${lato.lato300WOFF}') format("woff");
}

@font-face {
  font-family: "lato";
  font-style: italic;
  font-weight: 300;
  src:
    local("lato Light Italic"),
    local("lato-LightItalic"),
    url('${lato.lato300WOFF2ITC}') format("woff2"),
    url('${lato.lato300WOFFITC}') format("woff");
}

@font-face {
  font-family: "lato";
  font-style: normal;
  font-weight: 400;
  src:
    local("lato Light"),
    local("lato-Light"),
    url('${lato.lato400WOFF2}') format("woff2"),
    url('${lato.lato400WOFF}') format("woff");
}

@font-face {
  font-family: "lato";
  font-style: italic;
  font-weight: 400;
  src:
    local("lato Light Italic"),
    local("lato-LightItalic"),
    url('${lato.lato400WOFF2ITC}') format("woff2"),
    url('${lato.lato400WOFFITC}') format("woff");
}

@font-face {
  font-family: "lato";
  font-style: normal;
  font-weight: 700;
  src:
    local("lato ExtraBold"),
    local("lato-ExtraBold"),
    url('${lato.lato700WOFF2}') format("woff2"),
    url('${lato.lato700WOFF}') format("woff"); 
}

@font-face {
  font-family: "lato";
  font-style: normal;
  font-weight: 700;
  src:
    local("lato ExtraBold"),
    local("lato-ExtraBold"),
    url('${lato.lato700WOFF2ITC}') format("woff2"),
    url('${lato.lato700WOFFITC}') format("woff"); 
}

`;

export default PrimaryFonts;
