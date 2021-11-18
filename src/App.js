import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}
//const [pizzaItems, setPizzaItems] = useState([]);
//
/*
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }
  render() {
    console.log(this.props.items, 'props app');

    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/home" render={() => <Home pizzaItems={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
};

const mapStateToProps = (state) => {
  return {
    items: state.pizzasReducer.items,
  };
};*/

export default App;
