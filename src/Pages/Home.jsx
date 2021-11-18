import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories';
import PizzaItem from '../components/PizzaItem';
import PizzaLoading from '../components/PizzaLoading';
import SortPopup from '../components/SortPopup';
import { setCategory, setSortBy } from '../redux/actions/filter';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Все', 'Мясная', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { name: 'популярности', type: 'rate', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'engname', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const thisPizzasInCart = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  const onSelectCategory = React.useCallback(
    (index, name) => {
      dispatch(setCategory(index, name));
    },
    [dispatch],
  );
  const onSelectSortBy = React.useCallback(
    (type, index, order) => {
      dispatch(setSortBy(type, index, order));
    },
    [dispatch],
  );
  const onClickAddPizzaToCart = React.useCallback((obj) => {
    dispatch(addPizzaToCart(obj));
    console.log(obj);
  });

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          activeCategory={category.catIndex}
          items={categoryNames}
        />
        <SortPopup onClickItem={onSelectSortBy} items={sortItems} activeItem={sortBy.index} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => (
              <PizzaItem
                addPizzaToCart={onClickAddPizzaToCart}
                key={item.id}
                {...item}
                activeCategory={category.catIndex}
                thisPizzasInCart={
                  thisPizzasInCart[item.idGen] && thisPizzasInCart[item.idGen].length
                }
                sortBy={sortBy}
              />
            ))
          : Array(10).fill(<PizzaLoading />)}
      </div>
    </div>
  );
}

export default Home;
