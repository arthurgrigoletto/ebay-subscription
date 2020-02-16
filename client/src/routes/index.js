import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Subscriptions from '~/pages/Subscriptions';
import NewSubscriptions from '~/pages/NewSubscriptions';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Subscriptions} />
      <Route path="/new-subscription" component={NewSubscriptions} />
    </Switch>
  );
}
