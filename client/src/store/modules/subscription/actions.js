export function addSubscriptionRequest({ email, keywords, interval }) {
  return {
    type: '@subscription/ADD_REQUEST',
    payload: { email, keywords, interval },
  };
}

export function addSubscriptionSuccess(alert) {
  return {
    type: '@subscription/ADD_SUCCESS',
    payload: alert,
  };
}

export function requestFailure() {
  return {
    type: '@subscription/REQUEST_FAILURE',
  };
}

export function removeSubscription(id) {
  return {
    type: '@subscription/REMOVE',
    payload: { id },
  };
}

export function updateSubscriptionRequest(id, data) {
  return {
    type: '@subscription/UPDATE_REQUEST',
    id,
    data,
  };
}

export function updateSubscriptionSuccess(id, subscription) {
  return {
    type: '@subscription/UPDATE_SUCCESS',
    id,
    subscription,
  };
}
