import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { Logo } from '@shared/assets';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={Logo} alt="RankMyApp" />
          </Link>
          <Link to="/">Criar Alerta</Link>
        </nav>
      </Content>
    </Container>
  );
}
