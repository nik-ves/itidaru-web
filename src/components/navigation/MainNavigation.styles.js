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

  @media only screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;

export const Links = styled.ul`
  display: flex;
  font-size: 1.8rem;
  align-items: center;

  @media only screen and (max-width: 400px) {
    font-size: 1.5rem;
  }

  & li {
    margin-left: 2.5rem;
    color: var(--text-color);

    @media only screen and (max-width: 400px) {
      margin-left: 1.5rem;
    }
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

  @media only screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const MoonBtn = styled(BsMoonFill)`
  color: var(--text-color);
  font-size: 2rem;
  display: flex;
  cursor: pointer;

  @media only screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const LogoutBtn = styled.li`
  cursor: pointer;
`;
