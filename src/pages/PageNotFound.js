import Container from "../components/UI/Container";
import styled from "styled-components";

const ErrorMessage = styled.p`
  margin-top: 5rem;
  font-size: 3rem;
  color: white;
  text-align: center;
`;

const PageNotFound = () => {
  return (
    <Container>
      <ErrorMessage>Page not found!</ErrorMessage>
    </Container>
  );
};

export default PageNotFound;
