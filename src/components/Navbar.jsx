import React from 'react'
import {Link,useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar