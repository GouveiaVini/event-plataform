import { ApolloProvider } from "@apollo/client"
import Event from "./pages/Event"
import {client} from './lib/apollo'
import Router from "./components/Router"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
