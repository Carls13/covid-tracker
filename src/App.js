import React, { Fragment } from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { Index } from './pages/Index/Index';

import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyles/>
      <Header/>
      <Index/>
      <Footer/>
    </Fragment>
  );
}

export default App;
