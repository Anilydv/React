import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import EditTodoForm from "./EditTodoForm";

function Todo({ task, completed, id, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const isEditingToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          isEditingToggle={isEditingToggle}
        />
      ) : (
        <>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => removeTodo(id)}>
              <Delete />
            </IconButton>
            <IconButton onClick={isEditingToggle}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
export default Todo;
