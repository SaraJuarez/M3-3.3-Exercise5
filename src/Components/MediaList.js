import React from 'react';
import Mediacard from './Mediacard';

class MediaList extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <ul>
          <li>{card1}</li>
          <li>{card2}</li>
          <li>{card3}</li>
        </ul>
      </section>
    );
  }
}
const card1 = <Mediacard name='Rodolfo' date='5/5/2025' className='fa fa-heart' />;
const card2 = <Mediacard name='ElPelucas' date='2/5/2015' className='fa fa-heart' />;
const card3 = <Mediacard name='Micaela' date='8/5/2005' className='fa fa-heart' />;

export default MediaList;
