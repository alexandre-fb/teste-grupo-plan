import styled from "styled-components";
import { screenSizes } from "../../styles/screen-sizes";

export const Form = styled.form`
  display: grid;
  grid-template-areas:
    "name name"
    "email tel"
    "message message";

  grid-gap: 20px;

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-areas:
      "name"
      "email"
      "tel"
      "message";
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  font-size: 15px;

  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 20px;
    top: 17px;
    right: -13px;
    background-color: var(--very-dark-gray);
    border-left: 1px solid var(--dark-gray);
    transform: rotate(-45deg);
  }

  input,
  textarea {
    background: none;
    border: 1px solid var(--dark-gray);
    color: #fff;
    position: relative;
  }

  input {
    height: 20px;
  }

  textarea {
    height: 80px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  width: fit-content;
  text-transform: uppercase;
  color: var(--medium-gray);
  cursor: pointer;

  transition: 300ms;

  svg {
    font-size: 1rem;
    position: absolute;
  }

  :hover {
    color: var(--light-gray);
  }
`;
