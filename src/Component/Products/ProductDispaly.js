import React, { useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from  '../../Redux/action';

const ProductListing = () => {
  
  const dispatch = useDispatch(); //for set the data on the store

  const fetchProducts = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_URL}products`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <ProductComponent />
        </Row>
      </Container>
    </div>
  );
};

export default ProductListing;
