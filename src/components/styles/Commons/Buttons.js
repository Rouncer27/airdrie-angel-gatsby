import styled from "styled-components";
import { Link } from "gatsby";

const BigTealButton = styled.a`
  padding: 2rem 4rem;
  display: inline-block;
  border: 0.1rem solid ${props => props.theme.white};
  border-radius: 0.15rem;
  background: ${props => props.theme.teal};

  &:hover {
    background: ${props => props.theme.deepYellow};
    color: ${props => props.theme.grey};
  }
`;

const BigTealLink = styled(Link)`
  padding: 2rem 4rem;
  display: inline-block;
  border: 0.1rem solid ${props => props.theme.white};
  border-radius: 0.15rem;
  background: ${props => props.theme.teal};

  &:hover {
    background: ${props => props.theme.deepYellow};
    color: ${props => props.theme.grey};
  }
`;

export { BigTealButton, BigTealLink };
