import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

const CardComp = () => {
  return (
    <div className="cardcontainer container m-6 align-center">
    <h3 className="title mt-3">BUY YOUR FAVORITE PRODUCTS</h3>
      <Card className="mt-2"> 
        <CardBody className="cardtitle d-flex justify-content-between">
          <CardTitle tag="h5">Man Perfume</CardTitle>
          <CardText className="pricetag mb-2" tag="h6">
          $126
          </CardText>
        </CardBody>
        <CardBody className="cardsubtitle d-flex justify-content-between">
          <CardSubtitle className="flex-start" tag="h6">
          Denver - Hamilton
          </CardSubtitle>
        
          <Button className="addbtn" color="primary" outline>Add to Cart</Button>
        </CardBody>
      </Card>
      <Card className="mt-2"> 
        <CardBody className="cardtitle d-flex justify-content-between">
          <CardTitle tag="h5">Man Perfume</CardTitle>
          <CardText className="pricetag mb-2" tag="h6">
          $126
          </CardText>
        </CardBody>
        <CardBody className="cardsubtitle d-flex justify-content-between">
          <CardSubtitle className="flex-start" tag="h6">
          Denver - Hamilton
          </CardSubtitle>
        
          <Button className="addbtn" color="primary" outline>Add to Cart</Button>
        </CardBody>
      </Card>
      </div>
  );
};

export default CardComp;
