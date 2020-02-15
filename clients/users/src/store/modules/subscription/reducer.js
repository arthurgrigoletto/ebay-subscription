import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function subscription(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@subscription/ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@subscription/ADD_SUCCESS': {
        const { alert } = action.payload;

        draft.data.push(alert);
        draft.loading = false;
        break;
      }
      case '@subscription/REQUEST_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@subscription/UPDATE_SUCCESS': {
        const alertIndex = draft.data.findIndex(s => s.id === action.id);

        if (alertIndex >= 0) {
          draft.data[alertIndex] = {
            ...draft.data[alertIndex],
            ...action.subscription,
          };
        }
        break;
      }
      default:
    }
  });
}
