import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
// import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
import 'bulma/css/bulma.min.css'
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
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
              path ="coverLetterPage"
              element={<coverletterpage />}
              />
            <Route
              path ="linkedinPage"
              element={<linkedinpage />}
              />
          <Route
              path ="resumePage"
              element={<resumepage />}
              />
              <Route
              path ="exportPage"
              element={<resumepage />}
              />
               <Route
              path ="userPage"
              element={<user />}
              />
            {/* <Route 
              path="/matchup/:id" 
              element={<Vote />}
            /> */}
            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
