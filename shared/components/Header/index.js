import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '../../assets/logo.jpeg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="RankMyApp" />
          </Link>
          <Link to="/">Criar Alerta</Link>
        </nav>
      </Content>
    </Container>
  );
}
