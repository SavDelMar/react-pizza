import React from 'react';

const Categories = React.memo(function Categories({ items, onClickItem, activeCategory }) {
  console.log('меня перерисовали');

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((item, index) => (
            <li
              onClick={() => onClickItem(index, item)}
              key={`${item}_${index}`}
              className={activeCategory === index ? 'active' : ''}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});
export default Categories;
