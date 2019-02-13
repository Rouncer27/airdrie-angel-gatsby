import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import Header from "./Header/header";
import Footer from "./Footer/Footer";

import theme from "./styles/Theme";
import GlobalStyle from "./styles/Golbal";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </>
    )}
  />
);

export default Layout;
