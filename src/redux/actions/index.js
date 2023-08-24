const addTodo = (addValue) => {
  return {
    type: "ADD_TODO",
    payload: addValue,
  };
};

const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

const editTodo = (id, editValue) => {
  return {
    type: "EDIT_TODO",
    payload: { id, editValue },
  };
};

const clearTodo = () => {
  return {
    type: "CLEAR_TODO",
  };
};

export { addTodo, deleteTodo, editTodo, clearTodo };
