import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem, 
  Button
} from "reactstrap";

function Menu({ itemType, items }) {
  console.log("items in menu component", items);
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${itemType}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Button color="light" size="sm" className="font-weight-bold col">
            <Link to={`/${itemType}/new`}>Add new {itemType}</Link>
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;