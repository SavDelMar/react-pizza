import classNames from 'classnames';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function PizzaItem({ name, price, imageUrl, id, types, sizes, addPizzaToCart, thisPizzasInCart }) {
  const pizzaTypes = ['тонкое', 'пышное'];
  const pizzaSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(pizzaSizes.indexOf(sizes[0]));
  const pizzaPrice = Math.round(
    (((price * pizzaSizes[activeSize]) / 26) * pizzaSizes[activeSize]) / 26,
  );
  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };
  const addPizza = () => {
    let pizzaObjForAdd = {
      idGen: id,
      id: `${id} ${pizzaSizes[activeSize]} ${pizzaTypes[activeType]}`,
      name,
      price: pizzaPrice,
      imageUrl,
      type: pizzaTypes[activeType],
      size: pizzaSizes[activeSize],
    };
    addPizzaToCart(pizzaObjForAdd);
  };
  return (
    <div>
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt={name} />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {pizzaTypes.map((item, index) => (
              <li
                onClick={() => onSelectType(index)}
                key={`${item}_${index}`}
                className={classNames({
                  active: activeType === index,
                  disabled: !types.includes(index),
                })}>
                {item}
              </li>
            ))}
          </ul>
          <ul>
            {pizzaSizes.map((item, index) => (
              <li
                onClick={() => onSelectSize(index)}
                key={`${item}_${index}`}
                className={classNames({
                  active: activeSize === index,
                  disabled: !sizes.includes(item),
                })}>
                {item} см
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{pizzaPrice} UAH</div>
          <Button onClick={addPizza} className="button button--add" outline>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {thisPizzasInCart && <i>{thisPizzasInCart}</i>}
          </Button>
        </div>
      </div>{' '}
    </div>
  );
}
PizzaItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PizzaItem;
