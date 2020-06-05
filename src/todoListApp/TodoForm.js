import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Form, FormGroup, Button, Input } from "reactstrap";

function TodoForm({ addTodos }) {
  const [formValue, setFormValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addTodos(formValue);
    setFormValue("");
  };
  return (
    <Paper>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input
            style={{ marginTop: "15px" }}
            type="text"
            name="addlist"
            id="addlist"
            placeholder="Add form list"
            value={formValue}
            onChange={(event) => setFormValue(event.target.value)}
          />
        </FormGroup>

        <Button>Add</Button>
      </Form>
    </Paper>
  );
}
export default TodoForm;
