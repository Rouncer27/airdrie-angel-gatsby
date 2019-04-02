import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/Header/seo";

const NotFoundPageStyled = styled.section`
  .nf-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 90rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 100rem;
    }
    h1,
    p {
      width: 100%;
      text-align: center;
    }
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundPageStyled>
      <div className="nf-wrapper">
        <h1>404 NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </NotFoundPageStyled>
  </Layout>
);

export default NotFoundPage;
