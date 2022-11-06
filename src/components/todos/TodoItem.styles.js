import styled from "styled-components";

import { BiTrash, BiSave, BiPencil } from "react-icons/bi";

export const ListItem = styled.li`
  background-color: var(--main-color);
  color: var(--text-color);
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  word-wrap: break-word;
  border: 1px solid var(--accent-color);

  display: flex;
  justify-content: space-between;
`;

export const TodoName = styled.p`
  font-size: 2rem;
`;

export const Actions = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 85%;
  max-width: 100%;
  margin: -1rem;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 2rem;
  font-family: inherit;
`;

export const SaveBtn = styled(BiSave)`
  font-size: 2rem;
  cursor: pointer;
`;

export const EditBtn = styled(BiPencil)`
  font-size: 2rem;
  cursor: pointer;
`;

export const DeleteBtn = styled(BiTrash)`
  font-size: 2rem;
  margin-left: 2rem;
  cursor: pointer;
`;
