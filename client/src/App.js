import React, { Component } from "react";
import Launches from "./components/Launches";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import logo from "./logo.png";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX logo"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
