import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Content = styled.div`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: 0;
    margin-left: 20px;
    padding: 10px;
  }
`;

export const Subscription = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #666;
    padding: 10px;
  }
`;

export const Minutes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100px;
  border-right: 1px solid #eee;
  margin-right: 20px;
  padding: 10px;
  padding-right: 20px;

  strong {
    font-size: 40px;
    font-weight: bold;
    color: #7159c1;
  }

  span {
    display: block;
    margin-top: 5px;
    padding: 5px;
    font-size: 11px;
    color: #666;
  }
`;

export const Keyword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200px;
  border-right: 1px solid #eee;
  margin-right: 20px;
  padding-right: 20px;

  strong {
    font-size: 25px;
    font-weight: bold;
    color: #daa520;
  }

  span {
    display: block;
    margin-top: 5px;
    padding: 5px;
    font-size: 11px;
    color: #666;
  }
`;

export const EmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 25px 0 0;
    width: 70%;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }
`;
