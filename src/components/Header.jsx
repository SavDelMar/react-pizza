import React from 'react';
import Button from './ToCartButton';
import pizzaLogo from './../assets/img/pizza-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  const clickPoKnopke = () => {
    console.log('на меня давят!!!');
  };

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={pizzaLogo} alt="Pizza logo" />

            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart" onClick={clickPoKnopke}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
