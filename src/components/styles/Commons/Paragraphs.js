import styled from "styled-components";

const StandardParagraph = styled.div`
  p {
    font-family: ${props => props.theme.fontPrim};
    font-size: 1.8rem;
    font-weight: 300;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.8rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 1.8rem;
    }
  }
`;

export { StandardParagraph };
