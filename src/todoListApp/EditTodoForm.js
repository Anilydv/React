import React, { useState } from "react";
import { Form, FormGroup, Button, Input } from "reactstrap";

function EditTodoForm({ editTodo, id, task, isEditingToggle }) {
  const [editValue, setEditValue] = useState(task);

  const onSubmit = (e) => {
    e.preventDefault();
    editTodo(id, editValue);
    setEditValue("");
    isEditingToggle();
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input
            style={{ marginTop: "15px" }}
            type="text"
            name="edit List"
            id="Edit List"
            placeholder="Edit form"
            value={editValue}
            onChange={(event) => setEditValue(event.target.value)}
          />
        </FormGroup>

        <Button>Edit</Button>
      </Form>
    </div>
  );
}
export default EditTodoForm;
