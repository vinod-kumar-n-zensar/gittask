const initialState = {
  listData: []
};
export default function rootReducer(state = initialState, action) {
  if (action.type === "SET_LIST_DATA") {
    return Object.assign({}, state, {
      listData: action.payload
    });
  }
  return state;
}
