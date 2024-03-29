import React, { Suspense, useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import MovieDetail from './views/MovieDetail/MovieDetail'
import FavoritePage from './views/FavoritePage/FavoritePage'
import StarRatePage from './views/StarRatePage/StarRatePage';
import SearchPage from './views/SearchPage/SearchPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

const useTitle = () => {
  const [title, setTitle] = useState(null);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
};

function App() {
  const changeTitle = useTitle();
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, true)} />
          <Route exact path="/starrate" component={Auth(StarRatePage, true)} />
          <Route exact path="/searchpage/:query" component={Auth(SearchPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
