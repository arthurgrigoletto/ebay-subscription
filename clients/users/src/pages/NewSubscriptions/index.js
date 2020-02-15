import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid Email')
    .required('Email is Required'),
  keywords: Yup.string().required('Keywords is required'),
  interval: Yup.number()
    .oneOf([2, 10, 30])
    .required(),
});

export default function NewSubscriptions() {
  function handleSubmit(data) {
    console.tron.log(data);
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

          <button type="submit">Criar Alerta</button>
        </Form>
      </Content>
    </Container>
  );
}
