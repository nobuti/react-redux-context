export default (initialState, handlers) =>
  (state = initialState, action) => {
    if (handlers[action.type] != null) {
      return handlers[action.type](state, action);
    }
    return state;
  };
