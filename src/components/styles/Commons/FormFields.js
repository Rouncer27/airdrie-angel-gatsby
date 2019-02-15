import styled from "styled-components";

const FormMain = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 60rem;
  padding: 5rem 2rem;
  background: rgba(238, 238, 238, 0.75);
`;

const FormButton = styled.div`
  button {
    padding: 2rem 4rem;
    display: inline-block;
    transition: all 0.3s ease;
    border: 0.1rem solid ${props => props.theme.white};
    border-radius: 0.15rem;
    background: ${props => props.theme.teal};
    color: ${props => props.theme.white};

    &:hover {
      background: ${props => props.theme.deepYellow};
      color: ${props => props.theme.grey};
      cursor: pointer;
    }
  }
`;

const FormInput = styled.div`
  label {
    width: 100%;
    color: ${props => props.theme.navyBlue};

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.8rem;
    }
  }

  input {
    width: 100%;
    padding: 1rem;
    border: solid 0.1rem ${props => props.theme.navyBlue};
  }
`;

const FormTextarea = styled.div`
  label {
    width: 100%;
    color: ${props => props.theme.navyBlue};

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.8rem;
    }
  }

  textarea {
    width: 100%;
    padding: 1rem;
    border: solid 0.1rem ${props => props.theme.navyBlue};
  }
`;

export { FormButton, FormInput, FormTextarea, FormMain };
