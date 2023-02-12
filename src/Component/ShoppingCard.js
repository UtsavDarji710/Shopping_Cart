import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
const ShoppingCard = () => {
  return (
    <div className="shopingcardcontainer container m-6 align-center">
    <h3 className="shopingtitle mt-3">Your Shopping Cart</h3>
      <Card className="mt-2"> 
        <CardBody className="shoppingcardtitle d-flex justify-content-between">
          <CardTitle tag="h5">Man Perfume</CardTitle>
          <CardText className="shoppingpricetag mb-2" tag="h6">
          $252 <i>($126/item)</i>
          </CardText>
        </CardBody>
        <CardBody className="shoppingcardsubtitle d-flex justify-content-between">
          <CardSubtitle className="flex-start" tag="h6">
          Denver - Hamilton
          </CardSubtitle>
        
            <div className="d-flex">
            <Button className="shoppingaddbtn" >-</Button>
            <Button className="shoppingaddbtn" >+</Button>
            </div>
        </CardBody>
      </Card>
      
      </div>
  )
}

export default ShoppingCard