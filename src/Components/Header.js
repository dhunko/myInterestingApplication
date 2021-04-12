import styled from 'styled-components';
import { NavLink } from "react-router-dom";
const StyledHeader = styled.header`
  text-align: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
`
const StyledTab = styled.div`
  padding: 20px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #333;
    &:hover {
      font-weight: 600;
    }
  }
  a.selected {
    font-weight: 600;
    color: #000;
  }
`

export default function Header(props) {

  return (
    <StyledHeader>
      <StyledTab><NavLink activeClassName="selected" to="/home">Home</NavLink></StyledTab>
      <StyledTab><NavLink activeClassName="selected" to="/todo">To Do</NavLink></StyledTab>
      <StyledTab><NavLink activeClassName="selected" to="/addtodo">Add To Do</NavLink></StyledTab>
      <StyledTab><NavLink activeClassName="selected" to="/tcan">Trash Can</NavLink></StyledTab>
    </StyledHeader>
  );
};