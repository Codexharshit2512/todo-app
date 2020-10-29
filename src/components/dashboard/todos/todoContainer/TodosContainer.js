import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import firebase from "../../../../config/firebaseConfig";
import Todos from "./Todos";
import TodoErrorMsg from "./TodoErrorMsg";
import TodoLoader from "./TodoLoader";
import { setTodos } from "../../../../redux/actionCreators/todoActionCreators";

const TodoContainer = (props) => {
  const [todos, fillTodos] = useState([]);
  const [todosLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase
      .firestore()
      .collection("/todos")
      .where("user", "==", props.auth.username)
      .onSnapshot((snapshot) => {
        let arr = [];
        snapshot.forEach((doc) => arr.push({ ...doc.data(), id: doc.id }));
        setLoading(false);
        dispatch(setTodos(arr));
      });
  }, []);

  useEffect(() => {
    if (!props.todos.isEmpty) fillTodos(props.todos.filteredTodos);
  }, [props.todos]);

  useEffect(() => {
    let arr = [];
    let re = new RegExp(props.query);
    if (props.filter !== "all") {
      const bool = props.filter == "done" ? true : false;
      props.todos.todos.forEach((todo) => {
        if (re.test(todo.description) && todo.isCompleted === bool)
          arr.push(todo);
      });
    } else {
      props.todos.todos.forEach((todo) => {
        if (re.test(todo.description)) arr.push(todo);
      });
    }
    dispatch({ type: "SET_FILTERED_TODOS", payload: arr });
  }, [props.filter]);

  return (
    <div className="todos_container justify-content-center row col-12 col-md-7">
      {todosLoading === true ? (
        <TodoLoader />
      ) : props.todos.isEmpty ? (
        <TodoErrorMsg />
      ) : (
        <Todos todos={todos} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth.user,
  todos: state.todos,
  filter: state.filter,
  query: state.query,
});

export default connect(mapStateToProps, null)(TodoContainer);
