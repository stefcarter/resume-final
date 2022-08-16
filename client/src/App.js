import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Signup from './pages/signup';
import Login from './pages/login';

import CoverLetterPage from './pages/coverLetterPage';
import LinkedinPage from './pages/linkedinPage';
import Create from './pages/create';

// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';
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
              path="/Create" 
              element={<Create />}
            />
           <Route
              path ="/coverLetterPage"
              element={<CoverLetterPage />}
              />
            <Route
              path ="linkedinPage"
              element={<LinkedinPage />}
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
