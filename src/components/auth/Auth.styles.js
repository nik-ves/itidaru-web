import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10rem;

  @media only screen and (max-width: 800px) {
    margin: 5rem auto;
  }
`;

export const Form = styled.form`
  padding: 2rem 4rem;
  background-color: var(--main-color);
  color: var(--text-color);
  border-radius: 4px;
  max-width: 100%;
  width: 40rem;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const Control = styled.div`
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  border: 2px solid var(--text-color);
  width: 40rem;
  max-width: 100%;
  padding: 1rem;
  border-radius: 4px;

  &:focus {
    outline: none;
    border: 2px solid var(--accent-color);
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
`;

export const RequestBtn = styled.button`
  border: 1px solid var(--text-color);
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

export const SwitchFormMessage = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--accent-color);
`;
