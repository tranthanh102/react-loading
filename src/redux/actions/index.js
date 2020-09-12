import getPeople from "../../data/totoListData";
import { Pagination } from "react-bootstrap";

export const fetchData = () => {
  return (dispatch) => {
    dispatch(getData());
    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data));
      })
      .catch((err) => console.log("err:", err));
  };
};

export const getData = () => ({
  type: "FETCHING_DATA",
});

export function getDataSuccess(data) {
  return {
    type: "FETCHING_DATA_SUCCESS",
    payload: data,
  };
}

export function getDataFailure() {
  return {
    type: "FETCHING_DATA_FAILURE",
  };
}

export const removeTodo = (newTodoList) => ({
  type: "REMOVE_TODO",
  payload: newTodoList,
});

export const updateTodo = (newTodoList) => ({
  type: "UPDATE_TODO",
  payload: newTodoList,
});

/* export const initDataTodoList = function initDataTodoList() {
  console.log("haha");
  return {
    type: "INIT_TODOLIST",
    payload: todolistData,
  };
}; */
