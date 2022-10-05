import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieBackToLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  &:hover {
    background-color: aquamarine;
  }
`;

export default MovieBackToLink;
