import React, { Component } from "react";
import SEO from "../components/Header/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Question from "../components/sections/Nominate/Question";
import Steps from "../components/sections/Nominate/Steps";
import Criteria from "../components/sections/Nominate/Criteria";
import NominationForm from "../components/sections/Nominate/NominationForm";

class Nominate extends Component {
  render() {
    const questionTitleTop = this.props.data.wordpressPage.acf
      ._aap_nominate_question_title_top;
    const questionTitleBot = this.props.data.wordpressPage.acf
      ._aap_nominate_question_title_bot;
    const questionTitleContent = this.props.data.wordpressPage.acf
      ._aap_nominate_question_content;

    const setpsToNominate = this.props.data.wordpressPage.acf
      ._aap_steps_to_nominate;

    const criteriaContent = this.props.data.wordpressPage.acf
      ._app_criteria_content;

    const criteriaImage = this.props.data.wordpressPage.acf
      ._aap_criteria_bg_img;
    return (
      <Layout>
        <SEO />
        <Question
          data={{ questionTitleTop, questionTitleBot, questionTitleContent }}
        />
        <Steps data={setpsToNominate} />
        <Criteria data={{ criteriaContent, criteriaImage }} />
        <NominationForm />
      </Layout>
    );
  }
}

export const query = graphql`
  query Nominate($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _aap_nominate_question_title_top
        _aap_nominate_question_title_bot
        _aap_nominate_question_content
        _aap_steps_to_nominate {
          title
          content
        }
        _app_criteria_content
        _aap_criteria_bg_img {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Nominate;
