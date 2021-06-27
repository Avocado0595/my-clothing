
import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from './pages/hompage/HomePage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shoppage/ShopPage';
import Navbar from './components/navbar/Navbar';
import SignInSignOut from './pages/signin-signout/SignInSignOut';
import {auth, createUserProfile}  from './firebase/Firebase';
function App() {

  const [currentUser, setCurrentUser] = useState(null);

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
      <Navbar currentUser = {currentUser}/>
      <Switch>
        <Route exact path="/shop-page" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInSignOut} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
