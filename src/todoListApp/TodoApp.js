import React, { useState } from "react";
import { Paper, AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initialTodos = [
    {
      id: 1,
      task: "Momo",
      complete: false,
    },
    {
      id: 2,
      task: "Pizza",
      complete: true,
    },
    {
      id: 3,
      task: "Samosa",
      complete: true,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodos = (newTodoText) => {
    // setTodos([
    //   ...todos,
    //   {
    //     id: 4,
    //     task: "have you lunch",
    //     complete: false,
    //   },
    // ]);
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: newTodoText,
        complete: false,
      },
    ]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa",
        }}
        elevation={3}
      >
        <AppBar color="primary" position="static" style={{ height: "65px" }}>
          <Toolbar>
            <Typography color="inherit">Food Listing with hooks</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodos={addTodos} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default TodoApp;

/* 
Project Ideas
1.TodoApp
2.TodoForm
3.TodoList
4.TodoItems */

// We need three object to complete TodoApp i.e:-
//  id, Task, complete(true, or False)
