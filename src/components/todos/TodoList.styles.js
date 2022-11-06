import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 0;
  color: var(--text-color);
`;

export const Content = styled.section`
  background-color: var(--main-color);
  width: 75rem;
  margin: 10rem auto 0 auto;
  border-radius: 4px;
  padding: 2rem;
  max-width: 100%;

  @media only screen and (max-width: 800px) {
    margin: 5rem auto;
  }
`;

export const List = styled.ul`
  width: 60rem;
  max-width: 100%;
  margin: 0 auto;
`;

export const TodoMessage = styled.p`
  text-align: center;
  font-size: 2rem;
  color: var(--text-color);
`;
