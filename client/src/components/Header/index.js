import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import Logo from '~/assets/logo.jpeg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={Logo} alt="RankMyApp" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/new-subscription">Criar Alerta</Link>
        </nav>
      </Content>
    </Container>
  );
}
