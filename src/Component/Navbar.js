import React, { useState } from "react";
import { Navbar, NavbarBrand, Button, NavbarText, Badge } from "reactstrap";

function NavbarComp(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-dark">
      <div className="container">
        <Navbar {...args} className="bg-dark navbar-dark">
          <NavbarBrand href="/">My Online Shopping Site</NavbarBrand>

          <NavbarText>
            <Button color="primary" outline>
              My Cart <Badge color="primary">4</Badge>
            </Button>
          </NavbarText>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarComp;
