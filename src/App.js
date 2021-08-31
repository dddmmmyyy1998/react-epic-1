import React, { Suspence, lazy } from 'react';


import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import {Switch,Route} from 'react-router-dom'


// import Home from './pages/Home';
// import History from './pages/History';
// import About from './pages/About';

const Home = lazy(() => import('./pages/Home'));
const History = lazy(() => import('./pages/History'));
const About = lazy(() => import('./pages/About'));



function App() {
  return (
    <div className="App">
      <Header />
      <Suspence fallback={Loading}>
        <Switch>
          {/* 一条路由 */}
          <Route path="/" exact component={Home} />
          <Route path="/history" component={History} />
          <Route path="/About" component={About} />
        </Switch>
      </Suspence>
      <Footer />
    </div>
  );
}


export default App;
