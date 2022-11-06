import styled from "styled-components";

import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const Wrapper = styled.section`
  background-color: var(--main-color);

  & a {
    color: var(--text-color);
  }
`;

export const Content = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 3.5rem;
  color: var(--text-color);
`;

export const Links = styled.ul`
  display: flex;
  font-size: 1.8rem;
  align-items: center;

  & li {
    margin-left: 2.5rem;
    color: var(--text-color);
  }

  & a {
    text-decoration: none;
    padding-bottom: 0.3rem;
  }

  & a.active {
    border-bottom: 3px solid var(--text-color);
  }
`;

export const SunBtn = styled(BsSunFill)`
  color: var(--text-color);
  font-size: 2rem;
  display: flex;
  cursor: pointer;
`;

export const MoonBtn = styled(BsMoonFill)`
  color: var(--text-color);
  font-size: 2rem;
  display: flex;
  cursor: pointer;
`;

export const LogoutBtn = styled.li`
  cursor: pointer;
`;
