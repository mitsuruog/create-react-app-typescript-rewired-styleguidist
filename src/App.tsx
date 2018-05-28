import * as React from 'react';
import './App.scss';

import { Button } from "./shared/components/button/Button";
import { Header } from "./shared/components/header/Header";
import { Hero } from "./shared/components/hero/Hero";

class App extends React.Component {
  public render() {
    return (
        <div className="app">
          <Header/>
          <Hero>
            <h1 className="title">
              create-react-app-typescript-rewired-styleguidist
            </h1>
            <h2 className="subtitle">
              A sample for using react-styleguidist, TypeScript, generated by react-create-app with react-app-rewired.
            </h2>
            <Button>
              もっと詳しく
            </Button>
          </Hero>
        </div>
    );
  }
}

export default App;
