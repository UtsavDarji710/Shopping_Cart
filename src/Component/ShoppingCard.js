import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Modal,
} from "reactstrap";
import { ADD_TO_CART,REMOVE_ITEM } from "../actions/ActionConstant";
const ShoppingCard = () => {

  const ShoppingCards = useSelector(state => state.addItems)

  const dispatch = useDispatch()
  // useEffect(() => {return ShoppingCards},[ShoppingCards])

  const TotalPrice = (price, qnt) =>{
    return price * qnt
  }

  const delHandle = (id) => {
    dispatch({ type: REMOVE_ITEM , payload: {id : id} })
  }

  const addHandle = (id) => {
    dispatch({ type: ADD_TO_CART , payload: {id : id} })
  }

  // useEffect (()=>{TotalPrice(price,qnt),[TotalPrice]})

  return (
    <div className="container">
    <div className="shopingcard m-2 align-center mx-auto" style={{maxWidth: '475px'}}>
    <h3 className="shoppingtitle mt-3 fs-5">Your Shopping Cart</h3>
      {
        ShoppingCards.map(item => 
          // <Modal show={show}>
      <Card className="shoppingcart mt-2 mx-auto" style={{maxWidth: '450px'}} key={item.id}> 
        <CardBody className="shoppingcardtitle d-flex justify-content-between">
          <CardTitle tag="h5" className="fs-3">{item.title}</CardTitle>
          <CardText className="shoppingpricetag mb-2 fs-3" tag="h6">
          ${TotalPrice(item.price, item.quantity)} <span className="fs-6"><i>(${item.price}/item)</i></span>
          </CardText>
        </CardBody>
        <CardBody className="shoppingcardsubtitle d-flex justify-content-between">
          <CardSubtitle className="shoppingcardsubtitle d-flex flex-start fs-3" tag="h6">
          x
          {item.quantity}
          </CardSubtitle>
        
            <CardText className="shoppingbtn d-flex">
            <Button className="shoppingdelbtn me-1" onClick={()=> delHandle(item.id)}>-</Button>
            <Button className="shoppingaddbtn" onClick={()=> addHandle(item.id)}>+</Button>
            </CardText>
        </CardBody>
      </Card>
      // </Modal>
      )
    }
      </div>
      </div>
  )
}

export default ShoppingCard