
import React, { useEffect} from 'react';

import './App.css';
import HomePage from './features/hompage/HomePage';
import {Route,Switch, Redirect} from 'react-router-dom';
import ShopPage from './features/shoppage/ShopPage';
import Navbar from './components/navbar/Navbar';
import {auth, createUserProfile}  from './firebase/Firebase';

import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';
import Checkout from './features/checkout/Checkout';
import SignUp from './features/signin-signout/components/sign-up/SignUp';
import SignIn from './features/signin-signout/components/sign-in/SignIn';
import Contact from './features/contact/Contact';
import NotFound from './components/notfound/NotFound';



function App(props) {

  const { setCurrentUser, currentUser} = props;

  useEffect(()=>{
    const unSubcribeFromAuth = auth.onAuthStateChanged(async user=>{
      
      if(user){
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else
      setCurrentUser(user);
    }
      );
      return function cleanUp() {unSubcribeFromAuth()};

  }, [setCurrentUser])
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/shop-page" component={ShopPage} />
        <Route exact path="/sign-in" render={()=>currentUser ? (<Redirect to="/"/>) : (<SignIn/>)  }/>
        <Route exact path="/sign-up"  render={()=>currentUser ? (<Redirect to="/"/>) : (<SignUp/>) }/>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}
const mapStateToProps = ({user, cart})=>({
  currentUser: user.currentUser,
  cartHidden: cart.isHidden
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
