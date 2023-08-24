const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case "DELETE_TODO":
      const newList = state.list.filter(
        (element, index) => index !== action.payload
      );
      return {
        ...state,
        list: newList,
      };

    case "EDIT_TODO":
      const UpdateValue = state.list;
      UpdateValue.splice(action.payload.id, 1, action.payload.editValue);
      return {
        ...state,
        list: [...UpdateValue]
      };

    case "CLEAR_TODO":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducer;
