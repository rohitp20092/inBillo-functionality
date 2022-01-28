import React from "react";
import { Card } from "react-bootstrap";
import PaymentModal from "../Payment/PaymentMode";


function CardComponent(props) {

  return (
    <div>
      <Card
        style={{
          width: "25rem",
          height: "25rem",
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        <Card.Img
          style={{
            width: "140px",
            height: "140px",
            margin: "auto",
            marginTop: "20px",
          }}
          variant="top"
          src={props.product.image}
        />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>Rs {props.product.price}</Card.Text>
          <Card.Text>{props.product.category}</Card.Text>
          <PaymentModal product={props.product}/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
