import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const HeaderList = styled.ul`
  display: flex;
  &:hover {
    background-color: yellow;
  }
`;

const HeaderItem = styled.li``;

const MLink = styled(Link)``;

export default () => (
  <Header>
    <HeaderList>
      <HeaderItem>
        <MLink to="/">Albums</MLink>
      </HeaderItem>
      <HeaderItem>
        <MLink to="/artist">Artist</MLink>
      </HeaderItem>
      <HeaderItem>
        <MLink to="/search">Search</MLink>
      </HeaderItem>
    </HeaderList>
  </Header>
);
