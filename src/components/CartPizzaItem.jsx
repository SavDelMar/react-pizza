import React from 'react';
import ChangeCountCartItemButton, { RemoveAllThisTypeButton } from './ChangeCountCartItemButton';

function CartPizzaItem(props) {
  console.log(props);
  const removeItem = () => {
    let pizzaObj = {
      id: props.id,
    };
    props.removeItem(pizzaObj);
  };
  const removeAll = () => {
    let pizzaObj = {
      id: props.id,
    };
    props.removeAll(pizzaObj);
  };
  const addItem = () => {
    let pizzaObjForAdd = {
      idGen: props.idGen,
      id: props.id,
      name: props.name,
      price: props.price,
      imageUrl: props.imageUrl,
      type: props.type,
      size: props.size,
    };
    props.addItem(pizzaObjForAdd);
  };
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={props.imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{props.name}</h3>
        <p>
          {props.type} тесто, {props.size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <ChangeCountCartItemButton
          onClick={props.count > 1 ? removeItem : ''}
          className={'cart__item-count-minus'}
          count={props.count}
        />
        <b>{props.count}</b>
        <ChangeCountCartItemButton onClick={addItem} className={'cart__item-count-plus'} />
      </div>
      <div className="cart__item-price">
        <b>{props.price * props.count} UAH</b>
      </div>
      <div className="cart__item-remove">
        <RemoveAllThisTypeButton onClick={removeAll} />
      </div>
    </div>
  );
}

export default CartPizzaItem;
