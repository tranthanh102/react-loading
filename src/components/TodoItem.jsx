import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroupItem } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import { updateTodo, removeTodo } from "../redux/actions";

//Single todo item component
const TodoItem = (props) => {
  //Get todoList from todoReducer
  const todoList = useSelector((state) => state.todos.todoList);
  const [isEdit, updateEdit] = useState(false);
  const [inputUpdate, setInputUpdate] = useState(props.item.content);
  //Use for all the dispatch actions
  const dispatch = useDispatch();

  //Remove single todo in the list
  const removeTodoItem = (todoId) => {
    //filter to get the todoId which need to be remove
    let newTodoList = todoList.filter((item) => item.id !== todoId);
    dispatch(removeTodo(newTodoList));
  };

  const updateItemFunc = (todoId) => {
    updateEdit(false);
    let newTodoList = [...todoList];
    newTodoList.forEach((element, index) => {
      if (element.id === todoId) {
        element.content = inputUpdate;
      }
    });
    dispatch(updateTodo(newTodoList));
  };

  const canncelItemFunc = () => {
    setInputUpdate(props.item.content);
    updateEdit(false);
  };

  const handleInput = (e) => {
    setInputUpdate(e.target.value);
  };

  return (
    <div>
      <ListGroupItem key={props.item.id}>
        {isEdit === false ? (
          <div className="show-mode">
            <span>{props.item.content}</span>
            <div>
              <Button
                variant="warning"
                className="mr-2"
                onClick={() => {
                  updateEdit(!isEdit);
                }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  removeTodoItem(props.item.id);
                }}
              >
                Remove
                {/* <MdClose></MdClose> */}
              </Button>
            </div>
          </div>
        ) : (
          <InputGroup>
            <FormControl
              onChange={handleInput}
              value={inputUpdate}
              type="text"
            />
            <InputGroup.Append>
              <Button
                variant="danger"
                onClick={() => {
                  canncelItemFunc();
                }}
              >
                {" "}
                Cancel{" "}
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  updateItemFunc(props.item.id);
                }}
              >
                {" "}
                Update{" "}
              </Button>
            </InputGroup.Append>
          </InputGroup>
        )}
      </ListGroupItem>
    </div>
  );
};

export default TodoItem;
