const initState = {
  todoCount: [],
};
const countReducer = (state = initState, action) => {
  switch (action.type) {
    case "PLUS_1":
      return {
        ...state,
        todoCount: action.payload,
      };
    case "MINUS_1":
      return {
        ...state,
        todoCount: action.payload,
      };
    case "PLUS_10":
      return {
        ...state,
        todoCount: action.payload,
      };
    case "MINUS_10":
      return {
        ...state,
        todoCount: action.payload,
      };
    case "DUPLICATED_X2":
      return {
        ...state,
        todoCount: action.payload,
      };
    case "RESET":
      return {
        ...state,
        todoCount: action.payload,
      };
  }
};
export default countReducer;
