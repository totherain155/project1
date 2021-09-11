import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: black;
  // 스크롤이 길어져도 상단에 고정시킨다.
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const HeaderList = styled.ul`
  display: flex;
`;

const HeaderItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
  // 기본값은 투명하게 설정한다.
  border-bottom: 2px solid ${(props) => (props.current ? "red" : "transparent")};
  transition: ease-in-out 0.5s;
  height: 20px;
`;

const MLink = styled(Link)`
  color: white;
  font-weight: 600;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <HeaderList>
      <HeaderItem current={pathname === "/"}>
        <MLink to="/">Albums</MLink>
      </HeaderItem>
      <HeaderItem current={pathname === "/artist"}>
        <MLink to="/artist">Artist</MLink>
      </HeaderItem>
      <HeaderItem current={pathname === "/search"}>
        <MLink to="/search">Search</MLink>
      </HeaderItem>
    </HeaderList>
  </Header>
));
