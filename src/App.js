import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Mediacard from './Components/Mediacard';
import MediaList from './Components/MediaList';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {list1}
        {list2}
      </div>
    );
  }
}
const list1 = <MediaList title='Lista 1' />;

const list2 = <MediaList title='Lista 2' />;

export default App;
