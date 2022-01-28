import React from "react";
import { Button, Modal, Container, Row, Col, Card, Alert, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { payment } from  '../../Redux/action';

function PaymentModal(props) {

    const amount = useSelector((state) => state.allProducts.amount); 
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = React.useState(false);
    const [alertShow, setAlertShow] = React.useState(false);

    const amonutPay =(price)=>{
        dispatch(payment(amount-price));
        setAlertShow(true)
    }

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Buy
            </Button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Payment Mode
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Card
                                    style={{
                                        width: "20rem",
                                        height: "20rem",
                                        textAlign: "center",
                                    }}
                                >
                                    <Card.Img
                                        style={{
                                            width: "140px",
                                            height: "140px",
                                            margin: "auto",
                                            marginTop: "30px",
                                        }}
                                        variant="top"
                                        src={props.product.image}
                                    />
                                    <Card.Body
                                        style={{
                                            margin: "auto",
                                            marginTop: "20px",
                                        }}
                                    >
                                        <Card.Title>{props.product.title}</Card.Title>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Alert variant="success" show={alertShow}> Payment Done by Credit Card</Alert>
                                <Row className="justify-content-md-center" style={{ marginTop: '5rem' }}>
                                    <Col md="auto">Amount : {props.product.price}</Col>
                                </Row>
                                <Row className="justify-content-md-center" style={{ marginTop: '1rem' }}>
                                    <Col md="auto">
                                        <Button variant="primary" onClick={()=>amonutPay(props.product.price)}>Amount Pay</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PaymentModal;