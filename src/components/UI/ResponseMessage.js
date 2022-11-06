import styled from "styled-components";

const Message = styled.span`
  color: var(--text-color);
  font-size: 2rem;
  position: fixed;
  top: 7.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  background-color: ${(props) => (props.success ? "green" : "red")};
  border-radius: 4px;
`;

const ResponseMessage = (props) => {
  return <Message success={props.success}>{props.children}</Message>;
};

export default ResponseMessage;
