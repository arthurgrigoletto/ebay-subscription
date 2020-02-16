import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 30px;
  background: #fff;
`;

export const Content = styled.div`
  height: 64px;
  /* max-width: 1720px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 50px;
      padding-right: 50px;
    }

    a {
      letter-spacing: 1px;
      margin: 15px;
      font-weight: 500;
      color: #222;
    }
  }
`;
