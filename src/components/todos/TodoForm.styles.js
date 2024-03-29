import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 2rem auto 4rem auto;
  width: 60rem;
  max-width: 100%;
  /*  */
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: var(--main-color);
  border-radius: 4px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid var(--accent-color);
  font-size: 2rem;

  width: 100%;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  border: 2px solid transparent;
  outline: none;
  font: inherit;

  &:focus {
    border: 2px solid var(--accent-color);
  }

  @media only screen and (max-width: 400px) {
    padding: 0.5rem;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #fff;
  border: 1px solid #fff;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  font-size: 1.5rem;
  cursor: pointer;
  width: 15rem;
  margin-left: 1rem;

  &:hover {
    background-color: transparent;
    color: var(--text-color);
  }

  @media only screen and (max-width: 400px) {
    padding: 0.5rem;
  }
`;
