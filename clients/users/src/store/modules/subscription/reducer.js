import produce from 'immer';

export default function subscription(state = [], action) {
  switch (action.type) {
    case '@subscription/GET_SUCCESS':
      return produce(state, draft => {
        const { subscriptions } = action;

        subscriptions.forEach(s => draft.push(s));
      });
    case '@subscription/ADD_SUCCESS':
      return produce(state, draft => {
        const { alert } = action;

        draft.push(alert);
      });
    case '@subscription/REMOVE':
      return produce(state, draft => {
        const alertIndex = draft.findIndex(s => s.id === action.id);

        if (alertIndex >= 0) {
          draft.splice(alertIndex, 1);
        }
      });
    case '@subscription/UPDATE_SUCCESS':
      return produce(state, draft => {
        const alertIndex = draft.findIndex(s => s.id === action.id);

        if (alertIndex >= 0) {
          draft[alertIndex] = {
            ...draft[alertIndex],
            ...action.subscription,
          };
        }
      });
    default:
      return state;
  }
}
