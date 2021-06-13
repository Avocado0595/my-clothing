
import './App.css';
import HomePage from './pages/hompage/HomePage';
import {Route, Switch, Link} from 'react-router-dom';
import ShopPage from './pages/shoppage/ShopPage';
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/hats">Hats</Link>
      </nav>
      <Switch>

      <Route exact path="/hats" component={ShopPage}/>
      
      <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
