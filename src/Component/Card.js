import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/ActionConstant'
// import { addToCart } from "../actions/ActionFunction";

import { useDispatch } from 'react-redux'
// import { addToCart } from "../actions/ActionFunction";

const CardComp = () => {

  const todo = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const addHandle = (id) => {
    dispatch({ type: ADD_TO_CART , payload: {id : id} })
  }


  return (
    <div className="container">
    <div className="cardcontainer align-item-center mx-auto" style={{maxwidth:'550px'}}>
      <h3 className="title mt-3">BUY YOUR FAVORITE PRODUCTS</h3>
      {
        todo.map((product) => { return(
      
      <Card className="mt-2 mx-auto" style={{maxwidth:'500px'}} key={product.id}>
        <CardBody className="cardtitle d-flex justify-content-between">
          <CardTitle tag="h5">{product.title}</CardTitle>
          <CardText className="pricetag mb-2" tag="h6">
            ${product.price}
          </CardText>
        </CardBody>
        <CardBody className="cardsubtitle d-flex justify-content-between">
          <CardSubtitle className="flex-start" tag="h6">
            {product.description}
          </CardSubtitle>

          <Button className="addbtn" color="primary" outline onClick={() => addHandle(product.id)}>
            Add to Cart
          </Button>
        </CardBody>
      </Card>
        )})}
    </div>
    </div>
  );
};

export default CardComp;
