import React from "react";
import { Button, Container, Row, Col, Card, Alert, Form } from 'react-bootstrap';
import { useSelector } from "react-redux";

const CreditCard = () => {

    const amount = useSelector((state) => state.allProducts.amount); 
    const [isPay, setIsPay] = React.useState(false);
    const [alertShow, setAlertShow] = React.useState(false);

    const duePayment =()=>{
        setIsPay(true)
    }

    const payment =()=>{
        setAlertShow(true)
    }

    return (
        <Container>
            <Row>
                <Col style={{ marginTop: '2rem' }}>
                    <Card>
                        <Card.Header>Credit Card Amout</Card.Header>
                        <Card.Body>
                            <Card.Title>Amout Limit 4000</Card.Title>
                            <Card.Text>
                                Available Balance {(amount).toFixed(2)}
                            </Card.Text>
                            <Card.Text>
                                Due Balance {(4000-amount).toFixed(2)}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>duePayment()}>Due Payment</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {isPay && (
                <Col style={{ marginTop: '2rem' }}>
                    <Alert variant="success" show={alertShow}> Payment successfull</Alert>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Text className="text-muted">
                                Select Installment Day
                            </Form.Text>
                            <Form.Check type="radio" name="group1" label="30 Day" />
                            <Form.Check type="radio" name="group1" label="60 Day" />
                            <Form.Check type="radio" name="group1" label="90 Day" />
                        </Form.Group>
                    </Form>
                    <Row className="justify-content-md-center" style={{ marginTop: '1rem' }}>
                        <Col md="auto">
                            <Button variant="primary" onClick={()=>payment()}>Payment</Button>
                        </Col>
                    </Row>
                </Col>)}
            </Row>
        </Container>
    )
}
export default CreditCard;