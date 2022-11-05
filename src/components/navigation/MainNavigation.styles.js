import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: var(--main-color);

  & a {
    color: white;
  }
`;

export const Content = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
`;

export const Links = styled.ul`
  display: flex;
  font-size: 1.8rem;
  align-items: center;

  & li {
    margin-left: 2.5rem;
    color: white;
  }

  & a {
    text-decoration: none;
    padding-bottom: 0.3rem;
  }

  & a.active {
    border-bottom: 3px solid white;
  }
`;

export const LogoutBtn = styled.li`
  cursor: pointer;
`;
