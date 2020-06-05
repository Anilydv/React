import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todos, id) => (
          <div key={id}>
            <Todo
              task={todos.task}
              id={todos.id}
              completed={todos.complete}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
}
export default TodoList;
