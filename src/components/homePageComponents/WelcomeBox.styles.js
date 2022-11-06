import styled from "styled-components";

export const Content = styled.section`
  max-width: 100%;
  width: 80rem;
  margin: 10rem auto;
  background-color: var(--main-color);
  color: var(--text-color);
  padding: 3rem;
  border-radius: 4px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);

  & a {
    color: var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
  }

  @media only screen and (max-width: 800px) {
    margin: 5rem auto;
  }
`;

export const TitleBox = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid grey;
  margin-bottom: 5rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  margin-top: 1.5rem;
`;

export const FooterBox = styled.div`
  padding-top: 1rem;
  border-top: 1px solid grey;
  margin-top: 5rem;
  text-align: center;
`;
