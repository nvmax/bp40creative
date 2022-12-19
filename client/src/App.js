import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import Home from './pages/Home';
import Nav from './components/Nav/index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer/index';
import Success from './pages/Success'
import Header from './components/Header/index';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Header />
          <Nav />

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
            <Route 
                path="/success" 
                element={<Success />} 
              />
          </Routes>
          <div className='footer-location'><Footer /></div>
        </StoreProvider>
      </Router>

    </ApolloProvider>
  );
}

export default App;
