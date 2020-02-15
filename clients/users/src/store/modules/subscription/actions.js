export function addSubscriptionRequest(data) {
  return {
    type: '@subscription/ADD_REQUEST',
    data,
  };
}

export function addSubscriptionSuccess(alert) {
  return {
    type: '@subscription/ADD_SUCCESS',
    alert,
  };
}

export function removeSubscription(id) {
  return {
    type: '@subscription/REMOVE',
    id,
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
