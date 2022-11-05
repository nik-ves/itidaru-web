import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 60rem;
  margin: 5rem auto;
  color: white;

  & h2 {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }

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
  margin-bottom: 2rem;
`;

export const TextInput = styled.input`
  width: 70%;
  font-size: 2rem;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const SubmitBtn = styled.button`
  background-color: #fff;
  border: 1px solid #fff;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;
