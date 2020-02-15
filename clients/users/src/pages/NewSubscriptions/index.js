import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { addSubscriptionRequest } from '~/store/modules/subscription/actions';
import { Container, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid Email')
    .required('Email is Required'),
  keywords: Yup.string().required('Keywords is required'),
  interval: Yup.number()
    .oneOf([2, 10, 30], 'Interval must be one of 2, 10 or 30')
    .required(),
});

export default function NewSubscriptions() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.subscription.loading);

  function handleSubmit({ email, interval, keywords }) {
    dispatch(addSubscriptionRequest({ email, interval, keywords }));
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit} schema={schema}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input
            name="keywords"
            type="text"
            placeholder="Produto para Alerta"
          />
          <Input
            name="interval"
            type="number"
            placeholder="Intervalo de Notificações"
          />

          <button type="submit">
            {loading ? 'Carregando...' : 'Criar Alerta'}
          </button>
        </Form>
      </Content>
    </Container>
  );
}
