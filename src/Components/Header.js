import React, { useState } from "react";
/*Link 컴포넌트를 사용하여 페이지를 전환하면, 페이지를 새로 불러오지 않고 애플리케이션은 
그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경해 준다. */
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
  transition: border-bottom ease-in-out 0.7s;
  width: 50px;
  height: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MLink = styled(Link)`
  color: white;
  font-weight: 700;
`;

// withRouter 함수는 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근할 수 있게 해준다.
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <HeaderList>
      <HeaderItem current={pathname === "/"}>
        <MLink to="/">Movies</MLink>
      </HeaderItem>
      <HeaderItem current={pathname === "/tv"}>
        <MLink to="/tv">TV</MLink>
      </HeaderItem>
      <HeaderItem current={pathname === "/search"}>
        <MLink to="/search">Search</MLink>
      </HeaderItem>
    </HeaderList>
  </Header>
));
