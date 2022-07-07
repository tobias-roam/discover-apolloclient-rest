import './App.css'
import { RestLink } from 'apollo-link-rest'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import RocketList from './modules/RocketList'
import Rocket from './modules/Rocket'
import AppLayout from './layouts/AppLayout'

// Set `RestLink` with your endpoint
const restLink = new RestLink({ uri: "https://api.spacex.land/rest/" });

// Setup your client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<RocketList />} />
            <Route path='/:id' element={<Rocket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
