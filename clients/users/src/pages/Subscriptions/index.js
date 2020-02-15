import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container } from './styles';

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('subscriptions');

      setSubscriptions(response.data);
    }

    loadSubscriptions();
  }, []);

  return (
    <Container>
      {subscriptions.map(s => (
        <p>{s.email}</p>
      ))}
    </Container>
  );
}
