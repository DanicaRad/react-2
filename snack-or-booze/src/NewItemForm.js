import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardBody,
  Button
} from 'reactstrap';
import './NewItemForm.css';

function NewItemForm({addItem, itemType}) {
  const [form, updateForm] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });
  const history = useHistory();

  function handleChange(evt) {
    evt.persist();
    updateForm(f => ({ ...f, [evt.target.name]: evt.target.value }))
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    addItem(form, itemType);
    history.push("./")
  };

  const { name, description, recipe, serve } = form;

  return (
    <Card>
      <CardBody>
      <CardTitle className="font-weight-bold text-center">
        Add a new item to {itemType} menu
      </CardTitle>
      <Form className="new-item-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            id="name" 
            placeholder="new item name"
            onChange={handleChange}
            value={name}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Input
            name="description"
            id="description" 
            placeholder="description"
            onChange={handleChange}
            value={description}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="recipe">Recipe</Label>
          <Input
            name="recipe"
            id="recipe" 
            placeholder="recipe"
            onChange={handleChange}
            value={recipe}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="serve">Instructions for Serving</Label>
          <Input
            name="serve"
            id="serve"
            placeholder="serving instructions"
            onChange={handleChange}
            value={serve}
          />
        </FormGroup>
        <Button color="light" size="sm">Submit</Button>
      </Form>
      </CardBody>
    </Card>
  );
};

export default NewItemForm;