export const buildFiltersAndCachedKey = ({ email, interval }) => {
  let key = '';
  const filters = {};

  if (email) {
    key += `:${email}`;
    filters.email = email;
  }

  if (interval) {
    key += `:${interval}`;
    filters.interval = interval;
  }

  return {
    key,
    filters,
  };
};
