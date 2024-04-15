/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/fotologo2.png";
import { BsCart2 } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Sobre nós</a>
        <a href="">Contato</a>
        <a href="">Pontos de coleta</a>
        <a href="">Fórum</a>
        <a href="">
        </a>
        <button className="primary-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;