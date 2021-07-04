
import React, { useEffect} from 'react';
import './App.css';
import HomePage from './pages/hompage/HomePage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shoppage/ShopPage';
import Navbar from './components/navbar/Navbar';
import SignInSignOut from './pages/signin-signout/SignInSignOut';
import {auth, createUserProfile}  from './firebase/Firebase';

import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';

function App(props) {

  const { setCurrentUser} = props;

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

  }, [])
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/shop-page" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInSignOut} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = {setCurrentUser};
//same way
// const mapDispatchToProps = dispatch=>({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })


export default connect(null,mapDispatchToProps)(App);
