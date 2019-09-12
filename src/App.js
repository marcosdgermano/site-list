import { hot } from 'react-hot-loader/root';
import React from 'react';
import ShowItems from './components/showItems';

class App extends React.Component {
  render() {
    return <ShowItems />;
  }
}

export default hot(App);
