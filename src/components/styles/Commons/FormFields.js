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

const SelectDropdown = styled.div`
  width: 100%;
  margin: 2rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 2rem;
  }

  label {
    display: block;
    width: 100%;
    color: ${props => props.theme.navyBlue};

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.2rem;
    }
  }

  .select-container {
    position: relative;
    height: 29px;
    overflow: hidden;
    width: 240px;
    border-radius: 0;
    background-color: ${props => props.theme.navyBlue};
  }

  select {
    background: transparent;
    border: none;
    font-size: 14px;
    height: 29px;
    padding: 5px;
    width: 268px;
    color: #fff;
  }
`;

const CheckboxInput = styled.div`
  width: 100%;
  margin: 2rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 2rem;
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    display: block;
    position: relative;
  }

  span {
    display: inline-block;
    margin-top: 1rem;
    position: relative;
  }

  span::before {
    position: absolute;
    display: block;
    width: 27px;
    height: 27px;
    border: 0.3rem solid ${props => props.theme.navyBlue};
    background-color: ${props => props.theme.greyLight};
    right: -35px;
    box-sizing: border-box;
    transition: border-color 0.2s;
    content: "";
  }
  span:hover::before {
    border: 3px solid ${props => props.theme.deepYellow};
  }

  span:hover,
  span:hover::before,
  span:hover::after {
    cursor: pointer;
  }

  span::after {
    position: absolute;
    content: "\f00c";
    font-family: "FontAwesome";
    right: -31px;
    top: 0;
    color: transparent;
    transition: color 0.2s;
  }
  input[type="checkbox"]:checked + label span.checkbox::after {
    color: ${props => props.theme.navyBlue};
  }

  input[type="checkbox"]:checked + label span.checkbox::before {
    background-color: ${props => props.theme.teal};
    border: 3px solid ${props => props.theme.teal};
  }
`;

const RadioInput = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
  padding-top: 3rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 2rem;
  }

  .field-error-message {
    position: absolute;
    top: 0;
    left: 0;
    color: ${props => props.theme.strongred};
    font-size: 1.4rem;
    font-family: ${props => props.theme.fontSec};
    font-weight: 700;
  }

  label {
    display: block;
    position: relative;
  }

  label:first-of-type {
    margin-bottom: 2rem;
  }

  input[type="radio"] {
    display: none;
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  span.radio:hover {
    cursor: pointer;
  }

  span.radio::before {
    left: 52px;
    width: 45px;
    height: 25px;
    background-color: ${props => props.theme.grey};
    border-radius: 50px;
  }

  span.radio::after {
    left: 57px;
    width: 17px;
    height: 17px;
    border-radius: 10px;
    background-color: ${props => props.theme.navyBlue};
    transition: left 0.25s, background-color 0.25s;
  }

  input[type="radio"]:checked + label span.radio::after {
    left: 76px;
    background-color: ${props => props.theme.teal};
  }

  input[type="radio"]:checked + label span.radio::before {
    background-color: ${props => props.theme.deepYellow};
  }
`;

const FormInput = styled.div`
  width: 100%;

  label {
    display: block;
    width: 100%;
    color: ${props => props.theme.navyBlue};

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.2rem;
    }
  }

  input {
    width: 100%;
    padding: 1rem;
    border: solid 0.1rem ${props => props.theme.navyBlue};

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.4rem;
    }

    &:focus {
      outline: none;
      border: solid 0.1rem ${props => props.theme.deepYellow};
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    border-radius: 0;
    padding: 0.5rem;

    &:focus {
      outline: none;
      border: solid 0.1rem ${props => props.theme.deepYellow};
    }
  }
`;

const FormTextarea = styled.div`
  label {
    width: 100%;
    color: ${props => props.theme.navyBlue};

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.4rem;
    }
  }

  textarea {
    width: 100%;
    padding: 1rem;
    border: solid 0.1rem ${props => props.theme.navyBlue};
  }
`;

export {
  FormButton,
  FormInput,
  FormTextarea,
  FormMain,
  RadioInput,
  CheckboxInput,
  SelectDropdown
};
