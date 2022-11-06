import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 60rem;
  margin: 2rem auto 4rem auto;

  & p {
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: var(--main-color);
  border-radius: 4px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid white;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export const TextInput = styled.input`
  width: 75%;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  border: none;
  outline: none;
  font: inherit;
`;

export const SubmitBtn = styled.button`
  background-color: #fff;
  border: 1px solid #fff;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  font-size: 1.5rem;
  cursor: pointer;
  width: 20%;

  &:hover {
    background-color: transparent;
    color: var(--text-color);
  }
`;
