import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navbar, NavbarBrand, Button, NavbarText, Badge, Modal } from "reactstrap";
import ShoppingCard from "./ShoppingCard";

function NavbarComp(args) {
  // const [isOpen, setIsOpen] = useState(false);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => {return( <><ShoppingCard/></>)};

  // const toggle = () =>setIsOpen(!isOpen);
  const totalQuantity = useSelector(state => state.totalquantity)
  console.log(totalQuantity)


  return (
    <div className="bg-dark">
      <div className="container">
        <Navbar {...args} className="bg-dark navbar-dark">
          <NavbarBrand href="/">My Online Shopping Site</NavbarBrand>

          <NavbarText>
            <Button color="primary" outline onClick={handleShow}>
              My Cart <Badge color="primary">
                {totalQuantity}
              </Badge>
            </Button>
            {/* <Modal show={show} onHide={handleClose}>
              <ShoppingCard/>
            </Modal> */}
          </NavbarText>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarComp;
