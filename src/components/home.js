import React from 'react'
import {events} from '../state.js'
import '!style!css!sass!../styles/home.scss';

const Home = ({visible}) =>
    <div className='app'>
      <div className='topbar'>
        <span><i className='fa fa-ellipsis-h'/> <i className='fa fa-wifi'/></span>
        <span>4:34 PM</span>
        <span>100% <i className='fa fa-battery-full'/></span>
      </div>
      <span onTouchTap={events.toggleMenu}> toggle menu </span>
    </div>;

export default Home;
