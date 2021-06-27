
import './App.css';
import HomePage from './pages/hompage/HomePage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shoppage/ShopPage';
import Navbar from './components/navbar/Navbar';
import SignInSignOut from './pages/signin-signout/SignInSignOut';
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/shop-page" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInSignOut} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
