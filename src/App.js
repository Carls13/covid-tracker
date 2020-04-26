import React, { Fragment } from 'react';

import { Router } from '@reach/router';

import { Header } from './components/Header/Header';

import { Index } from './pages/Index/Index';

import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyles/>
      <Header/>
      <Router>
        <Index path="/"/>
        {/*<About path="/about"/> */}
      </Router>
    </Fragment>
  );
}

export default App;
