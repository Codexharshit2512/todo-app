import React from "react";
import { useDispatch, connect } from "react-redux";
import "./searchInput.scss";
import SearchInput from "./SearchInput";
import { resetTodos } from "../../../../redux/actionCreators/todoActionCreators";

class SearchInputContainer extends React.Component {
  // const state = useSelector((state) => state.todos);

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.dispatch(resetTodos());
    this.props.dispatch({ type: "CHANGE_QUERY", payload: "" });
  }

  search = (str) => {
    let re = new RegExp(str);
    const arr = [];
    if (this.props.filter !== "all") {
      let bool = this.props.filter == "done" ? true : false;
      this.props.todos.todos.forEach((todo) => {
        if (re.test(todo.description) && todo.isCompleted === bool) {
          arr.push(todo);
        }
      });
    } else {
      this.props.todos.todos.forEach((todo) => {
        if (re.test(todo.description)) {
          arr.push(todo);
        }
      });
    }
    this.props.dispatch({ type: "CHANGE_QUERY", payload: str });
    this.props.dispatch({ type: "SET_FILTERED_TODOS", payload: arr });
  };

  render() {
    return (
      <div className="todo_search_container row col-12 col-md-9 justify-content-center">
        <SearchInput search={this.search} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter,
});

export default connect(mapStateToProps, null)(SearchInputContainer);
