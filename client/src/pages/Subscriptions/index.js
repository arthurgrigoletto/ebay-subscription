import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';

import { removeSubscription } from '~/store/modules/subscription/actions';
import api from '~/services/api';

import {
  Container,
  Content,
  Subscription,
  Minutes,
  Keyword,
  EmptyBox,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('subscriptions');

      setSubscriptions(response.data);
    }

    loadSubscriptions();
  }, []);

  function handleRemove(id) {
    dispatch(removeSubscription(id));
  }

  return (
    <Container>
      <ul>
        {!subscriptions.length && (
          <EmptyBox>
            <h1>Nenhum alerta cadastrado</h1>
            <Link to="new-subscription">Cadastre já!</Link>
          </EmptyBox>
        )}
        {subscriptions.map(s => (
          <Content>
            <Subscription key={s._id}>
              <Minutes>
                <strong>{s.interval}</strong>
                <span>Minutos</span>
              </Minutes>
              <Keyword>
                <span>Alerta sobre</span>
                <strong>{s.keywords.toUpperCase()}</strong>
              </Keyword>
              <span>{s.email}</span>
            </Subscription>
            <button type="button" onClick={() => handleRemove(s._id)}>
              <MdClose size={30} color="#bb2124" />
            </button>
          </Content>
        ))}
      </ul>
    </Container>
  );
}
