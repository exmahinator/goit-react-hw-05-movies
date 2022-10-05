import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ActivePageLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;

  :hover,
  :focus {
    background-color: aquamarine;
  }

  &.active {
    color: red;
    background-color: royalblue;
  }
`;

export default ActivePageLink;
