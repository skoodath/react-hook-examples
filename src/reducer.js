export const initialState = {
  loading: true,
  error: false,
  users: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        users: action.payload,
        error: false
      };
    case "ERROR":
      return {
        loading: false,
        error: true,
        users: []
      };
    default:
      return state;
  }
};
